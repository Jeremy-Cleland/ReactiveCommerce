import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <m.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-4"
    >
      <Link to={`/product/${product.id}`} className="block group">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="object-cover w-full rounded aspect-square"
        />

        <div className="mt-3">
          <h3 className="font-medium text-gray-900 group-hover:underline  group-hover:underline-offset-4">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.description}</p>
          <p className="mt-1 text-sm text-gray-700">${product.price}</p>
        </div>
      </Link>
    </m.div>
  );
};

export default ProductCard;
