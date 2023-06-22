import { motion as m } from "framer-motion";
import { RiHeartFill, RiAddCircleFill } from "react-icons/ri";

const ProductCard = ({ product }) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-4"
    >
      <div className="flex items-center justify-center">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="rounded-md object-cover w-full aspect-square"
        />
      </div>
      <h3 className="text-base font-semibold mt-2">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <RiHeartFill className="text-red-500" />
          <span className="text-gray-600">{product.likes}</span>
        </div>
        <button className="flex items-center text-blue-500">
          <RiAddCircleFill className="mr-1" />
          Add to Cart
        </button>
      </div>
    </m.div>
  );
};

export default ProductCard;
