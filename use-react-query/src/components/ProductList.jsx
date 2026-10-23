import { useQuery } from "@tanstack/react-query";
import api from "../api/api";
import { useState } from "react";

const fetchProducts = async ({ queryKey }) => {
  // console.log(obj); //obj got from useQuery
  const res = await api.get(`/${queryKey[0]}?_page=${queryKey[1].page}&_per_page=6`);
  return res.data;
};

// useQuery fetches from server multiple times if failed thinking it can be down for a bit
// we can configure how many times it will try to call

const ProductList = ({ setProd }) => {
  const [page, setPage] = useState(1);

  const {
    data: products,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: fetchProducts,
    retry: false,
    // refetchInterval: 1000
    // staleTime: 5000 //after staleTime useQuery will check on server data changes and refetch if changes
  });

  if (isError) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {products.data &&
          products.data.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center m-2 border rounded-sm"
            >
              <img
                className="object-cover h-64 w-96 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-xl my-3">{product.title}</p>
              <button onClick={() => setProd(product.id)} className="">
                View Details
              </button>
            </li>
          ))}
      </ul>
      <div className="flex">
        {products.prev && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.prev)}
          >
            {" "}
            Prev{" "}
          </button>
        )}
        {products.next && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.next)}
          >
            {" "}
            Next{" "}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductList;
