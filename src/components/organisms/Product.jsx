import { useState, useEffect } from 'react';
import ProductCard from '../molecules/ProductCarts'


const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
          setLoading(true);
      
          const response = await fetch('/coffees.json'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
      
          const data = await response.json();
      
          setProducts((prevProducts) => [...prevProducts, ...data.productos]);
          setPage((prevPage) => prevPage + 1);
        } catch (error) {
          console.error('Error fetching products:', error);
        } finally {
          setLoading(false);
        }
      };

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 20 && !loading) {
        fetchProducts();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, loading]);

  return (
    <div className="flex flex-wrap justify-center gap-8 p-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {loading && <p>Cargando más productos...</p>}
    </div>
  );
};

export default Product;