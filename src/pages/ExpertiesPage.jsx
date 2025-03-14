import React from "react";
import { Link } from "react-router-dom";

const services = [
    {
        id: 1,
        imgSrc: "/images/img5.jpeg",
        title: "SURVEYING AND MAPPING",
        description:
            "Accurate surveying and mapping are the foundation of anysuccessful construction project.We utilize state-of-the-art Total Stations, Drones for Aerial Mapping, and CAD Software (AutoCAD Civil 3D, MicroStation) to conduct precise land surveys and topographic mapping. Our experienced surveyors ensure that all measurements are accurate.",
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
        description: "We specialize in bulk excavation, trenching, and land grading using high-performance machinerysuch as Excavators, Bulldozers, Motor Graders, Dump Trucks, and Vibratory Rollers. Our geotechnical engineers utilize GeoStudio and PLAXIS to assess soil stability and optimize earthmoving operations.Whetherforfoundation preparation orlarge- scale site development.",

        buttonText: "Let's Talk",
    },
    {
        id: 4,
        imgSrc: "/images/img8.jpeg",
        title: "ROAD CONSTRUCTION AND PAVEMENT ENGINEERING",
        description:
            "Our expertise in road infrastructure includes highway construction, asphalt paving, and concrete road development. We employ advanced Paving Machines, Road Rollers, Asphalt Plants, Concrete Mixers, and Curbing Machines to ensure smooth and durable roads. Our engineers use MX Road, Civil 3D, and Highway Design Software for optimal road layout and structural integrity.",
        buttonText: "Let's Talk",
    },
    {
        id: 5,
        imgSrc: "/images/img9.jpeg",
        title: "BUILDING CONSTRUCTION",
        description:
            "From residential complexes to commercial high-rises, we excel in building construction using Tower Cranes, Concrete Batching Plants, Scaffolding Systems, and Reinforcement Benders. We use Revit, Tekla Structures, and STAAD.Pro for structural modeling, ensuring robust and sustainable building designs. Our qualified site managers and engineers oversee every phase, fromfoundation to finishing, ensuring quality and compliance.",
        buttonText: "Let's Talk",
    },
    {
        id: 6,
        imgSrc: "/images/img10.jpeg",
        title: "INFRASTRUCTURE DEVELOPMENT",
        description: "We undertake large-scale infrastructure projects, including bridges, tunnels, and drainage systems, using Hydraulic Excavators, Drilling Rigs, Concrete Pumps, and Tunnel Boring Machines (TBMs). Our engineers leverage SAP2000, MIDAS Civil, and Bentley OpenBridge Designerforstructural analysis and durability assessment, ensuring infrastructure resilience.",
        buttonText: "Let's Talk",
    },
    {
        id: 7,
        imgSrc: "/images/img11.jpeg",
        title: "PROJECT MANAGEMENT AND EXECUTION",
        description:
            "Efficient project management ensures timely completion with optimized resources. We use Primavera P6, Microsoft Project, and BIM 360 to track progress, manage resources, and mitigate risks. Our qualified project managers implement Lean Construction techniques to enhance efficiency and reducewaste in construction processes.",
        buttonText: "Let's Talk",
    },
    {
        id: 8,
        imgSrc: "/images/img12.jpeg",
        title: "QUALITY ASSURANCE ANDCONTROL",
        description:
            "Budgeting and cost management are critical in construction. Ourteam employs Primavera P6, PlanSwift, Bluebeam Revu, and CostX for accurate project estimations, material take-offs, and financial forecasting. With our expertise in cost control and procurement planning, we ensure that projectsremainwithin budgetwithout compromising on quality.",
        buttonText: "Let's Talk",
    },
    {
        id: 9,
        imgSrc: "/images/img13.jpeg",
        title: "ENVIRONMENTAL COMPLIANCE AND SUSTAINABILITY",
        description: "We prioritize eco-friendly construction practices by integrating LEED Standards, Green Building Certification, and Environmental Impact Assessment (EIA) protocolsinto our projects. Our use of Waste Management Systems, Dust Suppression Equipment, and Noise Control Barriers ensuresthat our operations are environmentallyresponsible.",
        buttonText: "Let's Talk",
    },
    {
        id: 10,
        imgSrc: "/images/img14.jpeg",
        title: "SAFETY MANAGEMENT",
        description: "Safety is at the core of our operations. We implement rigorous safety protocols using PPE Monitoring Systems, Site SurveillanceDrones, and Fire Safety Equipment.Ourstaffistrained in OSHA standards and HSE (Health, Safety, and Environment) guidelines, and we use Safety Management Software like SiteDocs and EHS Insight to maintain compliance and prevent accidents.",
        buttonText: "Let's Talk",
    },
];

const ExpertiesPage = () => {
    return (
        <section className="py-16 bg-gray-50 mt-[60px]" id="services">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-[#163879]">
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
                            className="bg-white shadow-lg rounded-lg overflow-hidden w-full sm:w-80 lg:w-96 relative"
                        >
                            <div className="relative">
                                <img
                                    src={service.imgSrc}
                                    alt={service.title}
                                    className="w-full h-48 object-cover"
                                />
                                <h3 className="absolute inset-0 flex items-center text-center justify-center text-white text-xl font-bold bg-black/50">
                                    {service.title}
                                </h3>
                            </div>
                            <div className="p-6 text-center flex flex-col">
                                <p className="text-gray-600 mb-6">{service.description}</p>
                                <Link to="/contact">
                                    <button className="bg-[#163879] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
                                        {service.buttonText}
                                    </button>
                                </Link>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiesPage
