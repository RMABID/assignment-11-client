import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HighestLike from "../components/HighestLike";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header className="bg-[#6d4817]">
        <Navbar></Navbar>
      </header>
      <section>
        <Banner></Banner>
        <section className="w-11/12 mx-auto">
          <HighestLike></HighestLike>
          <Gallery></Gallery>
        </section>
        <ContactUs></ContactUs>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
