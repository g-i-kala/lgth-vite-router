import { data } from "autoprefixer";
import { useState, useEffect } from "react";
import styles from "../styles";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(()=>{
    fetch('https://letgotohaveit.com/wp-json/wp/v2/posts?_fields[]=title&per_page=5')
    .then(response => response.json())
    .then(data => {
      const articleTitles = data.map(article => article.title.rendered);
        setArticles(articleTitles);
    })
    .catch(error => {
      console.error('Error fetching articles:', error);
    });

  },[])
  
  return (
    <section id='articles' className={`${styles.paddingY}`}>
      <p className={`${styles.heading2}`}>Recent articles</p>
      <ul>
        {articles.map((title,index)=>{
          return <li key={index}>{title}</li>
        })}
      </ul>

    </section>
  )
}

export default Articles