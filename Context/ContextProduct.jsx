import React, { createContext, useEffect, useState } from 'react';
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchAll = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
  };

  const getProductById = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return await res.json();
  };

  const addProduct = async (product) => {
    const res = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    setProducts((prev) => [...prev, data]);
  };

  useEffect(() => { fetchAll(); }, []);

  return (
    <ProductContext.Provider value={{ products, getProductById, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};