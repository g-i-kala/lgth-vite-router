import { useState, useEffect } from "react";
import styles from "../styles";
import ArticleSingle from "./SinglePost";
import { Link } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [selectedArticle, setSelectedArticle] = useState(null);


  useEffect(() => {
    fetch(
      `https://letgotohaveit.com/wp-json/wp/v2/posts?_per_page=50`
    )
      .then((response) => response.json())
      .then((data) => {
        const articleData = data.map((article) => ({
          id: article.id,
          title: article.title.rendered,
          link: article.link,
          description: article.excerpt.rendered,
          image: article.jetpack_featured_media_url,
        }));
        setArticles(articleData);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section id="articles" className={`${styles.paddingY}`}>
      <div>
        <p className={`${styles.heading1}`}>Recent articles</p>
        <ul>
          {currentPosts.map((article, index) => {
            return (
              <li key={index} className="my-1">
                <div className="flex flex-col sm:flex-row md:my-10">
                  <div className="sm:w-1/3 m-1 sm:m-2 md:mx-4">
                    <img src={article.image} alt={article.title} />
                  </div>
                  <div className="sm:w-2/3 m-1 sm:m-2 md:mx-4">
                      <Link to={`/articles/${article.id}`}>
                      <h2 className={`${styles.heading2} mt-1 sm:mb-4`}>
                        {article.title}
                      </h2>
                      </Link>
                      <div dangerouslySetInnerHTML={{ __html: article.description }}></div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* pagination */}
      <div>
        {articles.length > postsPerPage && (
          <ul className="flex justify-center mt-4">
  
            {/* previous button */}
            {currentPage > 1 && (
              <li
                className="mx-1 hover:text-color02 cursor-pointer"
                onClick={()=>paginate(currentPage - 1)}>
                  <a href="#" className="block"> ❮  </a>
              </li>
  
            )}
  
            {/* page numbers */}
            {Array(Math.ceil(articles.length / postsPerPage))
              .fill()
              .map((_, index) => (
                <li
                  key={index}
                  className={`mx-1 03 page-item${
                    currentPage === index + 1 ? " active" : ""
                  }`}
                >
                  <a
                    href="#"
                    className="hover:text-color02"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
  
              {/* next button */}
              {currentPage < Math.ceil(articles.length / postsPerPage) && (
                <li
                  className="mx-1 hover:text-color02 cursor-pointer"
                  onClick={()=>paginate(currentPage + 1)}>
                    <a href="#" className="block">❯</a>
                </li>
  
                )}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Articles;
