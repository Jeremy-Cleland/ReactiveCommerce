import ProductList from "../components/Home/ProductList.jsx";
import Header from "../components/resusable/Header.jsx";
import HeroBanner from "../components/resusable/HeroBanner.jsx";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Header
        title="Deals"
        subtitle="Get the best deals on the best products."
      />
      <ProductList />
    </>
  );
};
export default Home;
