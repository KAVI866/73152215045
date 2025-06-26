import React, { useContext } from 'react';
import { ProductContext } from '../Context/ContextProduct';
import { Link } from 'react-router-dom';

const Home = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="p-4">
      <section className="text-center py-10 bg-gray-100">
        <h2 className="text-4xl font-bold">Welcome to MyShop</h2>
        <p className="mt-2 text-gray-600">Discover the best deals of the season</p>
      </section>
      <section className="mt-10">
        <h3 className="text-2xl font-bold mb-4">New Arrivals</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.slice(-6).map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="p-4 border rounded hover:shadow">
                <img src={product.image} alt={product.title} className="h-40 mx-auto object-contain" />
                <h4 className="font-semibold mt-2">{product.title}</h4>
                <p className="text-green-700">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;