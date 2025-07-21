// src/pages/Category.jsx
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom';

export default function Category({ onAddToCart }) {
  const { slug } = useParams();
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    name: `${slug} Item ${i + 1}`,
    price: 79 + i * 5,
    category: slug,
    discount: i % 2 === 0 ? 10 : null,
    image: null, // optional: product image URL
  }));

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold capitalize">{slug}</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAddToCart} />
        ))}
      </div>
    </div>
  );
}
