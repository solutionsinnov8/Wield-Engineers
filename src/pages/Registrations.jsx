import React, { useState } from "react";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
  "/images/9.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
  "/images/21.jpg",
  "/images/22.jpg",
  "/images/23.jpg",
  "/images/24.jpg",
  "/images/25.jpg",
  "/images/26.jpg",
  "/images/27.jpg",
  "/images/28.jpg",
  "/images/29.jpg",
  "/images/30.jpg",
  "/images/31.jpg",
  "/images/32.jpg",
  "/images/33.jpg",
  "/images/34.jpg",
  "/images/35.jpg",
  "/images/36.jpg",
];

const Registrations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mt-[50px] mb-[50px] max-w-6xl mx-auto px-4">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6 text-[#163879]">
      OUR GALLERY
      </h2>

      {/* Masonry Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative border-[10px] overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
            onClick={() => setSelectedImage(images[index])}
          >
            <img
              src={img}
              alt={`Document ${index + 1}`}
              className="w-full h-40 object-contain transition-all duration-300 transform hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative">
            <button
              className="absolute top-3 right-3 bg-white text-black px-3 py-1 rounded-full text-lg font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Registrations;
