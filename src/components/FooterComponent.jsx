"use client";

import { useEffect, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tailwindClasses = {
  container: 'font-sans relative text-white py-8 px-8 font-sans bg-fixed bg-cover bg-center bg-black bg-opacity-40 border-t-4 border-stone-100',
  overlay: 'absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm',
  innerContainer: 'relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center',
  copyright: 'select-none text-center md:text-left mb-4 md:mb-0 font-bold',
  contact: 'text-center md:text-right font-bold',
  socialIcons: 'flex justify-center md:justify-end space-x-4 mb-4 md:mb-0',
  socialIcon: 'text-white hover:text-green-600 transition duration-200',
  info: 'text-center md:text-right text-white font-bold'
};

const FooterComponent = () => {
  const footerRef = useRef(null);
  const innerContainerRef = useRef(null);


  return (
    <footer ref={footerRef} className={tailwindClasses.container} style={{ backgroundImage: "url('./landing-bg.jpg')" }}>
      <div className={tailwindClasses.overlay}></div>

      <div ref={innerContainerRef} className={tailwindClasses.innerContainer}>
        <div className={tailwindClasses.copyright}>
          <p>&copy; ECO-DAQS 2020</p>
        </div>
        <div className={tailwindClasses.socialIcons}>
          <a href="https://www.instagram.com/EcoDaqs/" target='_blank' className={tailwindClasses.socialIcon}>
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/people/EcoDaqs-INC/61555581306423/" target='_blank' className={tailwindClasses.socialIcon}>
            <FaFacebookF size={24} />
          </a>
          <a href="https://www.linkedin.com/company/eco-daqs-inc/" target='_blank' className={tailwindClasses.socialIcon}>
            <FaLinkedinIn size={24} />
          </a>
        </div>
        <div className={tailwindClasses.contact}>
          <p>+1 (438) 874-1201</p>
          <p>+1 (438) 943-5773</p>
          <p>Info@ecodaqs.com</p>
          <p>Shipping@ecodaqs.com</p>
          <p>6311 Boul Gouin Ouest Suite 103 Montreal, Quebec, H4K 1A7</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
