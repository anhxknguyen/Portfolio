import React from "react";
import { useEffect, useRef } from "react";

const ImageModal = ({ image, onClose }) => {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      modalRef.current &&
      !modalRef.current.contains(event.target) &&
      !event.target.classList.contains("modal-button")
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-75 cursor-default">
      <button
        className="absolute text-3xl text-white top-10 right-20"
        onClick={onClose}
      >
        &#10005;
      </button>
      <img
        ref={modalRef}
        src={image}
        alt="Large Commission"
        className="max-h-full max-w-7xl no-select"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default ImageModal;
