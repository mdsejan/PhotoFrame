import React from "react";

const BeASponsorSection: React.FC = () => {
  return (
    <section className="max-w-screen-md xl:max-w-screen-lg mx-auto bg-blue-600 text-white text-center p-12 mb-[-5px] lg:mb-16 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Become a Sponsor and Make a Difference!
      </h2>
      <p className="text-lg mb-6">
        Join us in supporting our first-ever alumni reunion and showcase your
        brand to a wide audience.
      </p>
      <a
        href="https://reunion.dghsaa.org/be-a-sponsor"
        target="_blank"
        className="px-8 py-3 bg-yellow-400 text-blue-800 font-bold text-lg rounded-lg hover:bg-yellow-500 transition duration-300"
      >
        Be a Sponsor Now
      </a>
    </section>
  );
};

export default BeASponsorSection;
