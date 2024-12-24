import { Fade } from "react-awesome-reveal";
import img1 from "../assets/img/img1.jpeg";
import img2 from "../assets/img/img2.jpeg";
import img3 from "../assets/img/img3.jpeg";
import img5 from "../assets/img/img4.jpeg";
import img6 from "../assets/img/img6.jpeg";
import img7 from "../assets/img/img7.jpeg";
import img8 from "../assets/img/img8.jpeg";
import img9 from "../assets/img/img9.jpeg";

const Gallery = () => {
  return (
    <div>
      <div>
        <Fade direction="up" triggerOnce={true}>
          <h1 className="text-4xl font-Garamond font-bold text-center">
            Historical Artifacts Gallery
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce={true} duration={500}>
          <p className="text-center font-Garamond my-6 md:w-3/5 mx-auto">
            Discover our Featured Artifacts: A curated collection of historical
            treasures, celebrating ancient civilizations, remarkable
            craftsmanship
          </p>
        </Fade>
      </div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img5}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img6}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img7}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img8}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img9}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img1}
          />
          <img
            src={img5}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
