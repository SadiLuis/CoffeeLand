/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useState } from 'react';
import Modal from './Modal';

const ProductCard = ({ product }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Verificar si product.description existe antes de usar slice
  const truncatedDescription = product.detalle ? product.detalle.slice(0, 50) + (product.detalle.length > 50 ? '...' : '') : '';

  return (
    <motion.div className="bg-white p-4 rounded-md shadow-md">
      <img src={product.imagen} alt={product.nombre} className="w-full h-32 object-cover mb-4 rounded-md cursor-pointer" onClick={openModal} />
      <h3 className="text-xl font-bold mb-2">{product.nombre}</h3>
      <p className="text-gray-600">{truncatedDescription}</p>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-brown-500 font-bold">${product.precio}</span>
        <button className="bg-brown-500 text-white px-4 py-2 rounded-md" onClick={openModal}>
          Ver Detalles
        </button>
      </div>
      <Modal isOpen={modalIsOpen} closeModal={closeModal} product={product} />
    </motion.div>
  );
};

export default ProductCard;