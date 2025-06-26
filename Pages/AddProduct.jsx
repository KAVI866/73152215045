import React, { useState, useContext } from 'react';
import { ProductContext } from '../Context/ContextProduct';

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext);
  const [formData, setFormData] = useState({ title: '', price: '', description: '', image: '', category: '' });

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    addProduct(formData);
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['title', 'price', 'description', 'image', 'category'].map(field => (
          <input
            key={field}
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={`Enter ${field}`}
            className="w-full p-2 border rounded"
          />
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;