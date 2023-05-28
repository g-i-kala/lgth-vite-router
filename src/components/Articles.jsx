import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import styles from "../styles";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    fetch('https://letgotohaveit.com/wp-json/wp/v2/posts?_fields=title,link&per_page=5')
    .then(response => response.json())
    .then(data => {
      const articleData = data.map(article => 
        ({
          title: article.title.rendered,
          link: article.link,
        }));
        setArticles(articleData);
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });

  },[])
  
  return (
    <section id='articles' className={`${styles.paddingY}`}>
      {/* post titles with links */}
      {/* <div>
        <p className={`${styles.heading2}`}>Recent articles</p>
        <ul>
          {articles.map((article, index) => {
            return (
              <li key={index}>
                <a href={article.link}>
                  {article.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div> */}
      <iframe
        src="https://letgotohaveit.com/index.php/blog/"
        width='100%'
        height='600px'
      >

      </iframe>
    </section>
  );
}

export default Articles