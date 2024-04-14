import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Subscribe from "./components/Subscribe/Subscribe";
import TopProducts from "./components/TopProducts/TopProducts";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials/>
      <Footer/>
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};
export default App;
