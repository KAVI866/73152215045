import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../Context/ContextProduct';
import { Link } from 'react-router-dom';

const Products = () => {
  const { products } = useContext(ProductContext);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [priceLimit, setPriceLimit] = useState(1000);
  const [maxPrice, setMaxPrice] = useState(1000);
  useEffect(() => {
    if (products.length) {
      const prices = products.map(p => p.price);
      const max = Math.ceil(Math.max(...prices));
      setMaxPrice(max);
      setPriceLimit(max);
    }
  }, [products]);
  const categories = ['all', ...new Set(products.map(p => p.category))];

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) &&
    p.price <= priceLimit &&
    (category === 'all' || p.category === category)
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Browse Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border rounded w-full"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded w-full"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>

        <input
          type="range"
          min="0"
          max={maxPrice}
          value={priceLimit}
          onChange={(e) => setPriceLimit(Number(e.target.value))}
          className="w-full"
        />

        <div className="text-sm text-gray-700">
          Max Price: <span className="font-bold">${priceLimit}</span>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <div className="border p-4 rounded shadow hover:shadow-md transition">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 mx-auto object-contain"
                />
                <h3 className="mt-2 font-semibold text-sm">{product.title}</h3>
                <p className="text-green-600 font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found for your filters.</p>
      )}
    </div>
  );
};

export default Products;
