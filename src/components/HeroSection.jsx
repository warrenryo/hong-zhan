import { TypeAnimation } from "react-type-animation";
import Navbar from "./Navbar";
const HeroSection = () => {
  return (
    <>
      <section id="home">
        <div className="w-full h-lvh">
          <div
            className="relative h-full w-full "
            style={{
              backgroundImage: "url('/images/1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <Navbar/>
            <div className="relative bottom-20 flex items-center justify-center h-full brightness-100 mx-4">
              <div className="max-w-7xl w-full">
                <h1 className="text-4xl font-semibold  text-white">
                  <TypeAnimation
                    sequence={["HONG ZHAN Builders Corporation", 500]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "1em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </h1>
                <p className="text-white  md:w-[40%] mt-4">
                  Experience Excellence with PCAB-Registered Building and
                  Mechanical Experts. Customer satisfaction is our driving
                  force, and we go above and beyond to ensure that our client's
                  needs are met with utmost care and attention.
                </p>
                <div className="flex items-center justify-center md:justify-start mt-16 md:mt-10">
                  <button className="bg-green-500 p-4 px-6 hover:bg-green-600 duration-300 text-white rounded-md">
                    View Projects
                  </button>
                  <button className="border bg-transparent text-white p-4 px-6 ml-4 rounded-md hover:bg-white hover:text-black duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center h-full">
        <div className="block text-center relative top-12 md:top-0 md:text-start md:flex items-center justify-between bg-white h-64  max-w-7xl w-full ">
          <div>
            <h1 className="text-2xl">Building Is What We Do</h1>
            <h1 className="">Putting Quality, Security, and Customer Satisfaction First</h1>
          </div>
          <div className=" mt-4 md:mt-0">
            <button className="text-white bg-green-500 p-4 px-6 hover:bg-green-600 duration-300">Learn More</button>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
