import { Link } from "react-router-dom";
import blog1 from "../assets/img/blog1.jpg";
import blog2 from "../assets/img/blgo2.jpg";
import blog3 from "../assets/img/blog3.jpeg";
import blog4 from "../assets/img/img8.jpeg";
const Blog = () => {
  return (
    <div>
      <section className="bg-[#af9d84] my-6 dark:bg-gray-100 text-gray-100 dark:text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <Link
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900 dark:bg-gray-50"
          >
            <img
              src={blog1}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Preserving the Past: Real-Time Artifact Monitoring
              </h3>
              <span className="text-xs text-gray-400 dark:text-gray-600">
                February 19, 2021
              </span>
              <p>
                Track and catalog historical artifacts with precision using a
                digital interface designed for museums, archaeologists, and
                collectors.
              </p>
            </div>
          </Link>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
                src={blog2}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  The Journey of an Artifact: From Discovery to Display
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-600">
                  January 11, 2021
                </span>
                <p>
                  Dive into the lifecycle of artifacts, highlighting the
                  importance of tracking and documenting each step to preserve
                  history.
                </p>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
                src={blog3}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Tech Meets History: The Rise of Digital Artifact Tracking
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-600">
                  January 22, 2023
                </span>
                <p>
                  Showcase the latest innovations in artifact tracking, from
                  AI-driven insights to IoT-enabled monitoring devices.Discuss
                  common issues in artifact management, like deterioration,
                  misplacement, and theft, and how modern tools can help.
                </p>
              </div>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900 dark:bg-gray-50"
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44 bg-gray-500 dark:bg-gray-500"
                src={blog4}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Preventing Loss: How Smart Alerts Save Priceless Artifacts
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-600">
                  January 23, 2024
                </span>
                <p>
                  Highlight the role of real-time alerts in protecting artifacts
                  from environmental threats, security breaches, or
                  mishandling.Discuss the importance of digitizing artifact
                  records for better accessibility, research, and storytelling.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link
              to={"/all-artifacts"}
              type="button"
              className="px-6 py-3 hover:text-primary text-sm rounded-md hover:underline bg-gray-900 dark:bg-gray-50 text-gray-400 dark:text-gray-600"
            >
              Load more posts...
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
