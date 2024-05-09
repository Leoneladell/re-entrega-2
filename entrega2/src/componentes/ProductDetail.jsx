import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProducts, getProductsFromCategories } from "../products";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productsData = getProducts();
        const foundProduct = productsData.find((product) => product.id.toString() === id);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <section className="h-screen  max-w-6xl mx-auto pt-40 pb-0">
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
        <img src={product.image} alt={product.name} className="w-full lg:w-1/2 object-cover object-center" />
        <div className="flex flex-col justify-center flex-1 p-6 bg-white dark:bg-gray-800">
          <h3 className="text-3xl font-bold">{product.name}</h3>
          <p className="my-6 dark:text-gray-300">{product.description}</p>
          <button type="button" className="px-8 py-3 font-semibold rounded bg-teal-500 text-white hover:bg-emerald-500 transition duration-300">Agregar</button>
        </div>
      </div>
    </section>

  );
}

export default ProductDetail;