import React, { useState } from "react";

const images = [
  "/images/doc1.jpg",
  "/images/doc2.jpg",
  "/images/doc3.jpg",
  "/images/doc4.jpg",
  "/images/doc5.jpg",
  "/images/doc6.jpg",
  "/images/doc7.jpg",
  "/images/doc8.jpg",
  "/images/doc9.jpg",
  "/images/doc10.jpg",
  "/images/doc11.jpg",
  "/images/doc12.jpg",
];

const Registrations = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="mt-[50px] mb-[50px] max-w-6xl mx-auto px-4">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6 text-gray-800">
      OUR REGISTRATIONS AND PERFORMANCE
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
