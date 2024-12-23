import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <section>
        <Banner></Banner>
      </section>
    </div>
  );
};

export default Home;
