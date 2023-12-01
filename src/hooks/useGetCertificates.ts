import { useState,useEffect } from "react";
import axios from "axios";

export interface Product {
    id: number;
    name: string;
    title: string;
    images: string;
}

export function useGetCertificates() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading,setIsLoading ] = useState<boolean>(false);

    
    async function getData() {
        setIsLoading(true);
        try {
           const resp = await axios.get("https://dummyjson.com/products?limit=18");
           setProducts(resp.data.products)
        } catch (error) {
            console.error("Error fetching data:", error);
        } 
        setIsLoading(false);
      
    }
    console.log(products)
    useEffect(() => { getData() }, [])

    return {
        products,
        setProducts,
        getData,
        isLoading,
    }
}