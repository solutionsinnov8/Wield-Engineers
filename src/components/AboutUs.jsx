import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-between md:mt-[50px]">
        {/* Image Section */}
        <div className="relative order-2 lg:order-1">
          <img
            src="/images/img2.jpeg"
            alt="About Us"
            className="w-[90%] h-auto rounded-lg shadow-lg "
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#163879]">
            About Us
          </h2>
          <p className="text-gray-700 text-lg">
            Founded in 2013, <span className="text-black font-bold">Wield Engineers</span> has established itself as a reputable and dynamic
            contractor and construction firm. With a proven track record of successfully
            completing numerous government and civil projects, we take pride in delivering high quality infrastructure solutions that meet the highest industry standards. <br />
            Backed by a team of highly experienced engineers, diploma holders, and skilled labor,
            Wield Engineers ensures efficiency, professionalism, and innovation in every project.
            Our financial strength exceeds $100 million, enabling us to take on large-scale
            ventureswith confidence and stability. <br />
            We are fully registered with the <span className="text-black font-bold"> Pakistan Engineering Council (PEC), Securities and
            Exchange Commission of Pakistan (SECP), Federal Board of Revenue (FBR), Rawalpindi
            Chamber of Commerce & Industry (RCCI) </span>, and other governing bodies, reinforcing our
            commitmentto compliance and excellence.
            At Wield Engineers, we build with precision, integrity, and a vision for sustainable
            development,making us a trusted partnerin the construction industry.
          </p>
          {/* <button className="px-6 py-3 bg-[#183A7C] text-white rounded-md shadow-md hover:bg-[#183A7C] transition">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
