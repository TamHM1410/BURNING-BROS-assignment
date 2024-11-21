const baseURl ="https://dummyjson.com"

const endPoint={
    product:{
        root:(skip:number)=>  `/products?limit=12&skip=${skip}`,
        search:`/products/search`
        
    }
}

export {
    baseURl,
    endPoint
}