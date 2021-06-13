import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Article() {
  const [articles, setarticles] = useState();
  useEffect(async () => {
    const fetched_data = await fetch("http://localhost:8000/api/article");
    const json_data = await fetched_data.json();
    setarticles(json_data);
    console.log(json_data);
  }, []);
  return (
    <div className="mt-16">
      {articles
        ? articles.map((article) => {
            return (
              <div
                className="bg-white py-2 mx-16 mt-12 rounded  shadow-md hover:bg-gray-100"
                key={article.id}
              >
                <p className="text-xl text-center">{article.title}</p>
                <Link to={`/article/${article.id}`}>
                  <p className="px-8 py-4">{article.content}</p>
                </Link>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}

export default Article;
