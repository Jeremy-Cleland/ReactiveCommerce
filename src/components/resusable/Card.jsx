import { motion as m } from "framer-motion";
import PropTypes from "prop-types";

import { cardVariants } from "../../utils/variants.js";
const Card = ({ children, shadow }) => {
  const shadowClass = shadow
    ? "group hover:shadow-lg hover:shadow-violet-400/10"
    : "";
  return (
    <m.div
      className={`group mx-auto my-10 max-w-7xl rounded-lg bg-white px-2 dark:bg-dark-900 md:p-3 ${shadowClass}`}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5 }}
    >
      {children}
    </m.div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  shadow: PropTypes.bool,
};

export default Card;
