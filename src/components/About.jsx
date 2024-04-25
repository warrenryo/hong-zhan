const About = () => {
  return (
    <>
      <section id="home">
        <div className="w-full h-lvh">
          <div
            className="relative h-full w-full "
            style={{
              backgroundImage: "url('/images/2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="flex items-center justify-center h-full">
              {/* Features */}
              <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                  {/* End Col */}
                  <div className="mt-5 sm:mt-10 lg:mt-0">
                    <div className="space-y-6 sm:space-y-8">
                      {/* Title */}
                      <div className="space-y-2 md:space-y-4">
                        <h1 className="text-white md:text-3xl font-semibold">
                          Who we are
                        </h1>
                        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white">
                          About Our Company
                        </h2>
                        <p className="text-white text-sm md:text-md dark:text-neutral-500">
                          At Hong Zhan Builders, our goal is to build a
                          sustainable and continuously improving construction
                          company. We take pride in delivering predictable,
                          high-quality construction and services to our valued
                          clients. Our unwavering commitment extends beyond
                          project completion as we strive to forge enduring
                          relationships with professionals, trade contractors,
                          and suppliers.
                        </p>
                      </div>
                      {/* End Title */}
                      {/* List */}
                      <ul className="space-y-2 sm:space-y-4">
                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                            <span className="font-bold">Easy &amp; fast</span>{" "}
                            designing
                          </span>
                        </li>
                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                            Powerful <span className="font-bold">features</span>
                          </span>
                        </li>
                        <li className="flex space-x-3">
                          <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                            <svg
                              className="flex-shrink-0 size-3.5"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          <span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
                            User Experience Design
                          </span>
                        </li>
                      </ul>
                      {/* End List */}
                    </div>
                  </div>
                  <div className="flex md:block items-center justify-center mt-10 md:mt-0">
                    <img
                      className="rounded-xl w-[75%] "
                      src="/images/3.jpg"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Col */}
                </div>
                {/* End Grid */}
              </div>
              {/* End Features */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
