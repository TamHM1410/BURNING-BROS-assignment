
import axiosClient from "../utils/axios";
import { endPoint } from "../utils/endpoints";

const getProduct = async (current: number) => {
  const skip = 12 - 12 * current;

  const res = await axiosClient.get(endPoint.product.root(skip));
  return res;
};

const searchProduct =async (searhTerm:string)=>{
    const res =await axiosClient.get(endPoint.product.search,{
        params:{
            q:searhTerm
        }
    })
    return res
}

export { getProduct ,searchProduct};
