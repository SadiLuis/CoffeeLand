
import Header from "../components/atoms/Header";
import CoffeeCard from "../components/organisms/CoffeeLayout";
import Product from "../components/organisms/Product";

const HomePage = () => {
  return (
    <div className=" w-screen h-screen">
      <Header />
      <CoffeeCard/>
      <img src="/granos_cafe.svg" className="w-screen " />
      <main>
        <Product/>
      </main>
    </div>
  );
};

export default HomePage;
