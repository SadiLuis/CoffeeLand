import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const slideIn = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
};

const colorChange = {
  initial: { color: '#FFA500' },
  animate: { color: '#FF6347' },
};


const AboutUsPage = () => {
  const imageUrls = [
    'https://img.freepik.com/foto-gratis/primer-plano-cafe-capuchino-latte-arte-mesa-madera_23-2147893321.jpg?w=740&t=st=1704640308~exp=1704640908~hmac=4adcf9e3004b250b2853e62681ef9633332e8ffa67fcfd72b5010632d8a25f1d',
    'https://img.freepik.com/foto-gratis/plano-interior-cafe-sillas-cerca-bar-mesas-madera_181624-1669.jpg?w=740&t=st=1704639932~exp=1704640532~hmac=f5ccd7cfeea8ae105b646472829c5f452f6b256430ca35115815392cc168bf44',
    'https://img.freepik.com/foto-gratis/primer-plano-manos-barista-hacer-cafe-leche-arte-pintura_1150-12161.jpg?w=996&t=st=1704639936~exp=1704640536~hmac=e13331eaf765c2bd8abbedb511532f7d7c56808bd052a35dd17c8c95f8d688bd',
    'https://img.freepik.com/foto-gratis/vista-elevada-pasteles-cafe-bayas-mesa-madera_23-2147892879.jpg?t=st=1704640308~exp=1704640908~hmac=116df9e89cc35c51d22680a2c2908c3da11678f65b18fe561a96b60a771dfeb3',
    'https://img.freepik.com/foto-gratis/grupo-chicas_23-2148014929.jpg?w=1380&t=st=1704640474~exp=1704641074~hmac=b17c13ba2827adca9a3f326e5f02fbeecc251bdd27faeae0c2d764ea91a09973',
  ];

  const controls = useAnimation();

  useEffect(() => {
    controls.start(colorChange);
  }, [controls]);

  return (
    <div className="flex">
      <motion.div className="w-1/2 p-4" variants={slideIn} initial="initial" animate="animate">
        <h2 className="flex text-5xl mb-4 p-8 justify-center items-center text-orange-600">
          <motion.span variants={colorChange} initial="initial" animate="animate">
            Acerca de Nosotros
          </motion.span>
        </h2>
        <Link to="/homepage" className="absolute top-0 left-0 m-4 text-xl text-orange-600 cursor-pointer">
          <FaArrowLeft /> Volver
        </Link>
        <motion.p className="text-xl font-lato mb-8" variants={slideIn}>
          En CoffeeLand, nos apasiona ofrecer la mejor experiencia de café a nuestros clientes. Nuestra misión es brindar sabores excepcionales, calidad premium y momentos de deleite a todos los amantes del café. Fundada con amor por el café, CoffeeLand se ha convertido en un destino donde la pasión por los granos de café se encuentra con la excelencia en cada taza.
        </motion.p>
        <div className="flex">
          {imageUrls.slice(1).map((imageUrl, index) => (
            <motion.img
              key={index}
              src={imageUrl}
              alt={`Imagen ${index + 2}`}
              className="w-1/4 h-auto object-cover rounded-md mr-2"
              variants={slideIn}
            />
          ))}
        </div>
      </motion.div>
      <motion.div className="w-1/2 p-4" variants={slideIn} initial="initial" animate="animate">
        <motion.img
          src={imageUrls[0]}
          alt="Imagen 1"
          className="w-full h-2/3 object-cover rounded-md"
          variants={slideIn}
        />
      </motion.div>
    </div>
  );
};

export default AboutUsPage;