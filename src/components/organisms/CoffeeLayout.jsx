import { motion, useAnimation } from "framer-motion";

const CoffeeCard = () => {
  const controls = useAnimation();

  return (
    <motion.div
      className="relative flex p-4 bg-light-brown rounded-lg"
      onHoverStart={() => controls.start({ rotate: 360 })}
      onHoverEnd={() => controls.start({ rotate: 0 })}
    >
      <div className="flex-1 pr-4 w-1/2">
        <h2 className="text-9xl mb-2">
          Disfruta de tú <span className="text-orange-500">Café</span> fávorito
          antes de tus actividades
        </h2>
        <p className="text-3xl mb-4 font-lato">
          Impulsa tu productividad y construye tu estado de ánimo con una taza
          de café por la mañana.
        </p>
     
      </div>

      <div className="w-1/2 relative">
        <div className="flex items-end">
          <motion.img
            className="w-[841.21px] h-1/3 origin-top-left bg-black rounded-full rotate-[-11.59deg]"
            src="/layout_Cafe.svg"
            alt="Café"
          />
        </div>

        <motion.div
          className="absolute top-[45%] left-[20%] text-white"
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -100, 0, 100, 0],
            rotate: [0, 90, 180, 270, 0],
          }}
          transition={{ duration: 2, loop: Infinity }}
        >
          <motion.div className="flex items-center mb-2 bg-white rounded-md w-16">
            <span className="text-black ml-2">4.8</span>
            <span className="ml-2 text-yellow-500">★</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute top-[45%] right-[20%] text-black bg-white rounded-md px-2"
          animate={{
            x: [0, -100, 0, 100, 0],
            y: [0, -100, 0, 100, 0],
            rotate: [0, 90, 180, 270, 0],
          }}
          transition={{ duration: 2, loop: Infinity, delay: 0.5 }}
        >
          <motion.span>18K</motion.span>
        </motion.div>

        <motion.h3
          className="absolute top-[10%] left-[40%] text-xl font-lato mb-1 text-black bg-dark-brown rounded-md px-2 py-1 bg-white"
          animate={{
            x: [0, 100, 0, -100, 0],
            y: [0, -100, 0, 100, 0],
            rotate: [0, 90, 180, 270, 0],
          }}
          transition={{ duration: 2, loop: Infinity, delay: 1.0 }}
        >
          Cappuccino
        </motion.h3>
      </div>
    </motion.div>
  );
};

export default CoffeeCard;
