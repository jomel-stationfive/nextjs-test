import { Fragment } from "react";
import { useQuery } from "react-query";
import Skeleton from "react-loading-skeleton";

import { fetchProductList } from "../../pages/api/products";
import { ProductItem } from "./productItem";

export const Products = () => {
  const {
    isLoading,
    error,
    data: productList,
  } = useQuery("product-list", fetchProductList);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-10 pb-20">
      {isLoading ? (
        <>
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
          <Skeleton height={500} width={300} />
        </>
      ) : error ? (
        <h1 className="text-4xl">No products available.</h1>
      ) : (
        <>
          {productList?.map((item, i) => (
            <Fragment key={i}>
              <ProductItem productInfo={item} />
            </Fragment>
          ))}
        </>
      )}
    </div>
  );
};
