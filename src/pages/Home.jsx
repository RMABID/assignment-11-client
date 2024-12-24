import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HighestLike from "../components/HighestLike";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header className="">
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
      <footer className="mt-3">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
