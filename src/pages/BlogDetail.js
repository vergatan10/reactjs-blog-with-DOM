import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  useEffect(() => {
    document.title = "Blog";
  }, []);

  const params = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function getArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
      );

      if (!request.ok) {
        return setNotFound(true);
      }

      const response = await request.json();

      document.title = `Blog : ${response.title}`;

      setArticle(response);
      setLoading(false);
    }
    getArticle();
  }, [params]);

  if (notFound) {
    return <h1>Artikel tidak ditemukan :(</h1>;
  }

  return (
    <section className="section">
      {loading ? (
        <i>Loading article</i>
      ) : (
        <article className="article">
          <h1 className="article-title">{article.title}</h1>
          <time className="article-time">
            {new Date(article.publishedAt).toLocaleDateString()}
          </time>
          <p className="article-summary">{article.summary}</p>
          <p className="article-source">
            Source:{" "}
            <a href={article.url} target="_blank" rel="noreferrer">
              {article.newsSite}
            </a>
          </p>
          <img
            src={article.imageUrl}
            alt={article.title}
            className="article-image"
          />
        </article>
      )}
    </section>
  );
};

export default BlogDetail;
