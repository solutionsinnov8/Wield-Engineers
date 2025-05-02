import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-[75px]" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#163879] mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question or need assistance, 
          feel free to reach out via any of the methods below.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Address Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center transition-transform transform hover:scale-105">
            <FaMapMarkerAlt className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Office Address</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Office 28/A, Jhelum Road, Morgah Morr, Near Hunain Hotel,
              Opposite Ayub Park, Rawalpindi, 46600, Punjab, Pakistan
            </p>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center transition-transform transform hover:scale-105">
            <FaPhoneAlt className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-700 text-lg font-medium">051-5451102</p>
          </div>

          {/* Email Card */}
          <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center transition-transform transform hover:scale-105">
            <FaEnvelope className="text-5xl text-blue-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700 text-lg font-medium">info@wieldengineers.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
