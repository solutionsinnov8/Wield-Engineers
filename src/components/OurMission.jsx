import React from "react";

const OurMission = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12" id="mission">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        

        {/* Content Section */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-start space-y-4 ">
          <h2 className="text-3xl md:text-4xl font-bold text-[#163879]">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg">
          At Wield Engineers, our mission is to deliver high-quality, sustainable, and innovative
construction solutions that exceed client expectations. We are committed to
maintaining the highest standards of professionalism, efficiency, and safety while
contributing to the nation’s infrastructure development. Through our skilled
workforce and cutting-edge techniques,we aim to create structuresthatstand the test
oftime.

          </p>
          {/* <button className="px-6 py-3 bg-[#183A7C] text-white rounded-md shadow-md hover:bg-[#183A7C] transition">
            Learn More
          </button> */}
        </div>
        <div className="relative flex justify-end">
          <img
            src="/images/img3.jpeg"
            alt="About Us"
            className="w-[80%] h-auto rounded-lg shadow-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
