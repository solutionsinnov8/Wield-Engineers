import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    imgSrc: "/images/img5.jpeg",
    title: "SURVEYING AND MAPPING",
    description:
      "Accurate surveying and mapping are the foundation of anysuccessful construction project.We utilize state-of-the-art Total Stations, Drones for Aerial Mapping, GIS Software (ArcGIS, QGIS), and CAD Software (AutoCAD Civil 3D, MicroStation) to conduct precise land surveys and topographic mapping. Our experienced surveyors ensure that all measurements are accurate, aiding in effective project planning and execution.",
    buttonText: "Let's Talk",
  },
  {
    id: 2,
    imgSrc: "/images/img6.jpeg",
    title: "COST ESTIMATION AND QUANTITY SURVEYING",
    description:
      "Budgeting and cost management are critical in construction. Ourteam employs Primavera P6, PlanSwift, Bluebeam Revu, and CostX for accurate project estimations, material take-offs, and financial forecasting. With our expertise in cost control and procurement planning, we ensure that projectsremainwithin budgetwithout compromising on quality.",
    buttonText: "Let's Talk",
  },
  {
    id: 3,
    imgSrc: "/images/img7.jpeg",
    title: "EXCAVATION AND EARTHWORKS",
    description: "We specialize in bulk excavation, trenching, and land grading using high-performance machinerysuch as Excavators, Bulldozers, Motor Graders, Dump Trucks, and Vibratory Rollers. Our geotechnical engineers utilize GeoStudio and PLAXIS to assess soil stability and optimize earthmoving operations.Whetherforfoundation preparation orlarge- scale site development, ourteamensures precision and efficiency.",

    buttonText: "Let's Talk",
  },
];

const ServicesCards = () => {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#163879]">
          OUR EXPERTISE
        </h2>
        <p className="text-gray-700 text-lg text-center mb-12 w-full md:w-[70%] mx-auto">
          At Wield Engineers, we offer a diverse range of construction and engineering services backed
          by advanced machinery, cutting-edge software, and a highly qualified team. Our expertise
          spansmultiple disciplines, ensuring precision, efficiency, and excellence in every project.
        </p>
        {/* Flexbox Container to Center Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 lg:w-96"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#163879] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="/#contact">
                  <button className="bg-[#163879] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                    {service.buttonText}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <Link to="/">
          <button className="bg-[#163879] text-white py-3 px-8 rounded-md hover:bg-blue-700 transition mt-[30px] md:mt-[50px]">
            VIEW ALL EXPERTIES
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ServicesCards;
