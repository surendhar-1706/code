import React from "react";
export const getStaticPaths = async () => {
  const fetched_data = await fetch("http://localhost:8000/api/products");
  const json_data = await fetched_data.json();
  const paths = json_data.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const fetched_data = await fetch("http://localhost:8000/api/products/" + id);
  const json_data = await fetched_data.json();
  return {
    props: { product: json_data },
  };
};
function Details({ product }) {
  return (
    <div>
      <h1>Details Page</h1>
      {product.name}
    </div>
  );
}

export default Details;
