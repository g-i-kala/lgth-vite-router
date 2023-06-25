import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RSLoading } from "../components";
import styles from "../styles";
import "./singlePostStyle.scss";


const SinglePost = () => {
  const { id } = useParams();
  const [ article, setArticle ] = useState(null);

  useEffect(()=>{
    fetch(`https://letgotohaveit.com/wp-json/wp/v2/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
        setArticle(data);
    })
    .catch((error) => {
        console.error('Error fetching article:', error);
    });
  },[id]);

  if (!article) {
    return (<RSLoading/>)
  }

  return (
    <div className={`${styles.paddingY}`}>
        <h2 className={`${styles.heading1}`}>{article.title.rendered}</h2>
        <div
        className="singlePostStyle" 
        dangerouslySetInnerHTML={{ __html: article.content.rendered }}>

        </div>
    </div>

  );
};

export default SinglePost;

