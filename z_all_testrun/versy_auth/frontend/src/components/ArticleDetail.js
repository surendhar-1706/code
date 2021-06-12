import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ArticleDetail() {
  const [state, setstate] = useState({ loading: true, data: null });
  const { id } = useParams();
  useEffect(async () => {
    const fetched_data = await fetch("http://localhost:8000/api/" + id);
    const json_data = await fetched_data.json();
    setstate({ loading: false, data: json_data });
  }, []);
  return (
    <div>
      <p>Hello from ArticleDetail -- {id}</p>
      {state.loading ? (
        "loading"
      ) : (
        <div>
          <p>{state.data.title}</p>
          <p>s{state.data.content}</p>
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;
