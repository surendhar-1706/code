import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
export const getStaticProps = async () => {
  const fetched_data = await fetch("http://localhost:8000/api/products");
  const json_data = await fetched_data.json();

  return {
    props: { products: json_data },
  };
};
export default function Home({ products }) {
  return (
    <div className="text-gray-700m mt-16 mx-12 sm:grid md:grid grid-cols-3 gap-5">
      {products.map((product) => {
        return (
          <div
            className="bg-white rounded-md shadow-sm mt-4 overflow-hidden relative"
            key={product.id}
          >
            <img
              className="  md:w-full object-cover h- 32 sm:h-48"
              src={product.product_image}
            />
            <div className="m-4">
              <Link href={"/products/" + product.id} className="font-bold">
                {product.name}
              </Link>
              <span className="block"> {product.price}</span>
            </div>
            <div className="bg-gray-300 text-black rounded-md text-sm  ml-2 mt-2 font-mono absolute top-0">
              <span>{product.discounted_price} Off</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
