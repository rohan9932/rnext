import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import Product from "./Product";

export default function ProductList() {
  const loadRef = useRef(null);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: async ({ pageParam }) => {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${pageParam}`,
      );
      const data = await response.json();
      return data;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.skip + lastPage.limit < lastPage.total) {
        return lastPage.skip + lastPage.limit;
      }
      return undefined; // tells the query that there are no data
    },
  });

  useEffect(() => {
    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };
    //observer
    const observer = new IntersectionObserver(onIntersection);

    if (observer && loadRef.current) {
      observer.observe(loadRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);


  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <div>ProductList</div>

      {data?.pages.map((page, i) => (
        <div key={i}>
          {page.products.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              key={product.id}
            />
          ))}
        </div>
      ))}

      {/* will track this div */}
      <div ref={loadRef}>
        {isFetchingNextPage
          ? "Loading more products..."
          : hasNextPage
            ? "Scroll down for more"
            : "No more products to show."}
      </div>
    </div>
  );
}
