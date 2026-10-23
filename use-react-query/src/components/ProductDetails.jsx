import { useQuery } from "@tanstack/react-query";
import api from "../api/api";

const fetchProduct = async ({ queryKey }) => {
  const response = await api.get(`/${queryKey[0]}/${queryKey[1]}`);
  return response.data;
};

const ProductDetails = ({ id }) => {
  const {
    data: product,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["products", id], //extended slugs
    queryFn: fetchProduct,
  });

  if (isError) return <div>{error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="w-1/5">
      <h1 className="text-3xl my-2">Product Details</h1>
      <div className="border bg-gray-100 p-1 text-md rounded flex flex-col">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-cover h-24 w-24 border rounded-full m-auto"
        />
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>USD {product.price}</p>
        <p>{product.rating}/5</p>
      </div>
    </div>
  );
};

export default ProductDetails;
