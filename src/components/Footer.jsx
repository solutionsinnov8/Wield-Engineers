import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        Crafted with care by {" "}
        <a
          href="https://www.solutionsinnov8.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500 underline"
        >
          Solutions Innov8
        </a>
      </p>
    </footer>
  );
};

export default Footer;
