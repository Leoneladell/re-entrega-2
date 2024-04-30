import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"

function ProductList(){
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then ((response)=>response.json())
        .then ((data)=>{
            const productsData=data.map((item)=>({
                id:item.id,
                name: item.title,
                image:`https://picsum.photos/200/300?random=${item.id}`,
            }))

            setProducts(productsData)
        })
        .catch ((error)=>{
            console.error("error", error)
        })

    }, [])

    return(
      <div className="flex pb-10 mx-10 pt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div></div>
        
  );
}
    

export default ProductList