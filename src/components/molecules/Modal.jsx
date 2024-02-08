/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';

const Modal = ({ isOpen, closeModal, product }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.div 
            className="bg-white p-8 w-full max-w-3xl rounded-md shadow-lg flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          > 
            <div className="w-1/2 pr-8">
              <motion.img 
                src={product.imagen} 
                alt={product.nombre} 
                className="w-full h-auto rounded-md"
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
              />
            </div>
            <div className="w-1/2 space-y-4">
              <motion.h2 
                className="text-2xl font-bold mb-4"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
              >
                {product.nombre}
              </motion.h2>
              <p className='text-2xl font-lato mb-2'> Rate : {product.rate}</p>
              <p className="text-gray-600 mb-4">{product.detalle}</p>
              <div className="flex justify-between items-center">
                <span className="text-orange-600 font-lato">${product.precio}</span>
                <FaShoppingCart className="text-orange-600 text-2xl" />
                <motion.button 
                  className="bg-black text-orange-300 px-4 py-2 rounded-md duration-1000 hover:bg-white hover:border-orange-500 hover:border hover:text-orange-600" 
                  onClick={closeModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                >
                  Cerrar
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
