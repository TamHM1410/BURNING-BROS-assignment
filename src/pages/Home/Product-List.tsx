//@hook
import { useQuery } from "@tanstack/react-query";
import { useState, useRef } from "react";

///@component
import Loading from "../../components/Loading";

//@api
import { getProduct } from "../../apis/product";

//@type
import { Product } from "../../types/product";
import ImageWithBlur from "../../components/ImageBlur";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./Search";

const ProductList = () => {
  const listProduct = useRef<Product[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [currentItem, setCurrentItem] = useState<Product[] | any>(listProduct);

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  useQuery({
    queryKey: ["productList", currentPage],
    queryFn: async () => {
      const res = await getProduct(currentPage);
      listProduct.current = [...listProduct.current, ...res?.data?.products];
      setIsInitialLoading(false);

      return res?.data?.products;
    },
  });
  if (isInitialLoading) return <Loading />;
  const fetchMoreData = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const onSearchUpdate = (data: Product[]) => {
    listProduct.current = data;
    setCurrentItem(listProduct.current);
  };
  return (
    <div className="w-full h-full p-5 sm:p-10  px-5">
      <div className="py-5">
        <Search onSearchUpdate={onSearchUpdate} />
      </div>
      {Array.isArray(listProduct.current) && listProduct.current.length > 0 && (
        <InfiniteScroll
          dataLength={listProduct.current.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<div className="relative left-[700px]">Loading...</div>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4"
        >
          {Array.isArray(listProduct.current) &&
            listProduct.current.length > 0 &&
            listProduct.current.map((item: Product, index: number) => {
              return (
                <div
                  className="card bg-base-100 w-full sm:w-96 shadow-xl"
                  key={index}
                >
                  <figure>
                    <div className="carousel carousel-vertical rounded-box h-80 sm:h-96">
                      <div className="carousel-item h-full">
                        {Array.isArray(item?.images) &&
                          item.images.length > 0 &&
                          item.images.map((item: string, index: number) => {
                            return (
                              <ImageWithBlur
                                key={index}
                                src={item}
                                alt={`Image ${index}`}
                              />
                            );
                          })}
                      </div>
                    </div>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item?.title}</h2>
                    <p>{item?.description}</p>
                    <div className="card-actions justify-between pt-2">
                      <div className="font-bold text-red-600 text-2xl">
                        {item.price}$
                      </div>
                      <button className="btn btn-neutral">Buy now</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </InfiniteScroll>
      )}
      {Array.isArray(listProduct.current) &&
        listProduct.current.length === 0 && (
          <div className="w-full flex justify-center pt-10 font-bold text-2xl">
            NO PRODUCT WAS FOUND
          </div>
        )}
    </div>
  );
};

export default ProductList;
