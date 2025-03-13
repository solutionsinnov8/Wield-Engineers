import React from "react";

const OurVission = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12" id="vision">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative order-2 lg:order-1">
          <img
            src="/images/img4.jpeg"
            alt="About Us"
            className="w-[80%] h-auto rounded-lg shadow-lg "
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start space-y-4 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#163879]">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg">
          Our vision is to be a leading construction firm recognized for excellence, reliability,
and innovation. We aspire to expand our reach, embrace modern construction
technologies, and play a keyrole in shaping the future of infrastructure. Byfostering
long-term partnerships and upholding integrity in all our projects, we aim to
contribute to amore developed and resilientworld.
          </p>
          {/* <button className="px-6 py-3 bg-[#183A7C] text-white rounded-md shadow-md hover:bg-[#183A7C] transition">
            Learn More
          </button> */}
        </div>
      </div>
    </div>
  );
};


export default OurVission
