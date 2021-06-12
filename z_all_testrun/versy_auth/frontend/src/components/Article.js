import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Article() {
  const [articles, setarticles] = useState();
  useEffect(async () => {
    const fetched_data = await fetch("http://localhost:8000/api");
    const json_data = await fetched_data.json();
    setarticles(json_data);
    console.log(json_data);
  }, []);
  return (
    <div>
      {articles
        ? articles.map((article) => {
            return (
              <div
                className="bg-white py-2 mx-16 mt-16  rounded  shadow-md hover:bg-gray-100"
                key={article.id}
              >
                <p className="text-xl text-center">{article.title}</p>
                <p className="px-8">{article.content}</p>

                <Link className="px-8" to={`${article.id}`}>
                  Click here
                </Link>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}

export default Article;
