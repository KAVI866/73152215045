import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../Context/ContextProduct';

const ProductDetail = () => {
  const { id } = useParams();
  const { getProductById, products } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => { getProductById(id).then(setProduct); }, [id]);

  const related = products.filter(p => p.category === product?.category && p.id !== product?.id);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.title} className="h-64 object-contain mx-auto" />
        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-green-700">${product.price}</p>
          <p className="mt-4 text-gray-700">{product.description}</p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-10">Related Products</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {related.map(rel => (
          <div key={rel.id} className="p-2 border rounded">
            <img src={rel.image} alt={rel.title} className="h-32 object-contain mx-auto" />
            <p className="text-sm mt-1">{rel.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
