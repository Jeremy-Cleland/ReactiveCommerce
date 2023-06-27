import ProductList from "../components/Home/ProductList.jsx";
import Header from "../components/resusable/Header.jsx";

const Home = () => {
  return (
    <>
      <Header
        title="Deals"
        subtitle="Get the best deals on the best products."
      />
      <ProductList />
    </>
  );
};
export default Home;
