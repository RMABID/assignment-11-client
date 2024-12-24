import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
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
          <ContactUs></ContactUs>
        </section>
      </section>
    </div>
  );
};

export default Home;
