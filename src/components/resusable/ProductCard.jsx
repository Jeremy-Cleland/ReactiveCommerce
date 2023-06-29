import { Link } from "react-router-dom";
import Card from "./Card";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`} className="block group">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="object-cover w-full rounded aspect-square"
        />

        <div className="mt-3">
          <h3 className="font-medium text-gray-600   dark:text-dark-100 group-hover:underline group-hover:underline-offset-4">
            {product.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600  dark:text-dark-100">
            {product.description}
          </p>
          <p className="mt-1 text-sm text-gray-600  dark:text-dark-100">
            ${product.price}
          </p>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;
