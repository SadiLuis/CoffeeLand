// Header.jsx
import { motion } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-black text-white p-4 text-center relative z-10"
    >
      <h1 className="text-4xl ">CoffeeLand</h1>
      <nav className="m-4 font-lato flex flex-row text-2xl justify-between items-center cursor-pointer">
        <Link to="/" className="duration-1000 hover:text-orange-600">
          Inicio
        </Link>
        <FaShoppingCart className="text-white duration-1000 hover:text-orange-600 " />

        <div className="flex items-center">
          <Link to="/about" className=" duration-1000 hover:text-orange-600 mr-4">
            Acerca de nosotros
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
