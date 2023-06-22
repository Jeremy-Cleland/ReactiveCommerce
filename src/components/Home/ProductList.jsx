import ProductCard from "../resusable/ProductCard.jsx";

const products = [
  {
    id: 1,
    title: "Product 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitconsectetur adipiscing elit",
    imageSrc:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    likes: 10,
  },
  {
    id: 2,
    title: "Product 2",
    description:
      "Praesent volutpat nunc vel mauris iaculis, sit amet tincidunt ligula pretium.",
    imageSrc:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    likes: 5,
  },
  {
    id: 3,
    title: "Product 3",
    description:
      "Fusce finibus ipsum eu justo tristique, auctor tempus metus pharetra.",
    imageSrc:
      "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    likes: 8,
  },
  // {
  //   id: 4,
  //   title: "Product 4",
  //   description:
  //     "Fusce finibus ipsum eu justo tristique, auctor tempus metus pharetra.",
  //   imageSrc:
  //     "https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  //   likes: 8,
  // },
  // Add more products here
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-3 gap-4 px-2">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
