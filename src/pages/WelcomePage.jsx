// WelcomePage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const WelcomePage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simula una espera de 2 segundos antes de cambiar a la página principal
    const timeoutId = setTimeout(() => {
      setLoading(false);
      // Redirigir al usuario a la página principal
      navigate('/homepage');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]); // Asegúrate de incluir navigate en la lista de dependencias

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url('/loader_layout.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-black text-center ml-96">
        {loading ? (
          <div className="flex items-center">
            <p className="text-2xl font-lato">¡Bienvenido a CoffeeLand...</p>
            <motion.img
              src="/coffeecoffee.svg"
              alt="Loading Icon"
              className="w-16 h-16 ml-6"
              animate={{ rotateY: [0, 360, 0], transition: { duration: 3, repeat: Infinity } }}
            />
          </div>
        ) : (
          <>
          </>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
