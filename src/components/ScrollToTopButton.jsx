// components/ScrollToTopButton.jsx
"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const ScrollToTopButton = () => {
  const {t} = useTranslation()
  
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Show button if scrolled down more than 300px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
  <button
    onClick={handleScrollToTop}
    className={`z-20 fixed bottom-4 right-4 flex items-center p-3 bg-green-700/50 hover:bg-white/90 border-2 border-green-700 text-white hover:text-green-600 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'} `}
    aria-label="Scroll to Top"
  >
    <FaArrowUp className="text-md mr-2" />
    <span className="text-xs font-bold">{t("topBtn")}</span>
  </button>
);
};

export default ScrollToTopButton;
