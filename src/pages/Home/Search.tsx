///@hook 

import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";
import { useQueryClient } from "@tanstack/react-query";
import { searchProduct } from "../../apis/product";

//@ type
import { Product } from "../../types/product";
interface SearchProps {
  onSearchUpdate: (products: Product[]) => void;
}

const Search = ({ onSearchUpdate }: SearchProps) => {

  const queryClient=useQueryClient()

  const [value, setValue] = useState("");

  const debouncedSearchTerm = useDebounce(value, 600);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const fetchProducts = async () => {
    if (debouncedSearchTerm) {
      try {
        const res = await searchProduct(debouncedSearchTerm);
        onSearchUpdate(res?.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    if(!debouncedSearchTerm){
        queryClient.invalidateQueries(['productList'])
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [debouncedSearchTerm]);

  return (
    <>
      <div>
        <label className="input input-bordered flex items-center gap-2 w-[40%]">
          <input
            type="text"
            className="grow"
            placeholder="Search product"
            value={value}
            onChange={handleSearch}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
    </>
  );
};

export default Search;
