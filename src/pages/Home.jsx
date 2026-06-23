import Navbar from "../components/layout/Navbar";
import BentoHero from "../components/sections/BentoHero";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import Categories from "../components/sections/Categories";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Newsletter from "../components/sections/Newsletter";
import Footer from "../components/layout/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <BentoHero />
      <FeaturedProducts />
      <Categories />
      <WhyChooseUs />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;