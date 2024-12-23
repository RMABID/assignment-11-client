import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import HighestLike from "../components/HighestLike";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <section>
        <Banner></Banner>
        <section className="w-11/12 mx-auto">
          <HighestLike></HighestLike>
          <Gallery></Gallery>
        </section>
      </section>
    </div>
  );
};

export default Home;
