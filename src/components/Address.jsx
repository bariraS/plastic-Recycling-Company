"use client";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const tailwindClasses = {
  section: 'bg-stone-100 text-stone-900 py-16 fade-in',
  container: 'container mx-auto flex flex-col md:flex-row items-start md:items-center p-8 space-y-8 md:space-y-0 md:space-x-8 fade-in',
  leftColumn: 'w-full md:w-2/3 p-4 md:p-8 fade-in',
  rightColumn: 'w-full md:w-1/3 p-4 md:p-8 bg-white shadow-lg rounded-lg fade-in',
  map: 'w-full h-96 md:h-[400px] rounded-lg',
  details: 'flex flex-col space-y-6',
  address: 'text-lg leading-relaxed',
  contact: 'text-lg leading-relaxed',
  socialLinks: 'flex space-x-6 mt-4',
  socialIcon: 'text-3xl hover:text-green-600 transition-colors duration-300'
};




const Address = () => {
  const {t} = useTranslation()
  useEffect(() => {
    gsap.utils.toArray('.fade-in').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);
  return (
    <section className={tailwindClasses.section}>
      <div className={tailwindClasses.container}>
        <div className={tailwindClasses.leftColumn}>
          <iframe
            className={tailwindClasses.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.475646093794!2d-73.69326828444016!3d45.53585187910119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc922d0bbd3cfe7%3A0x4a58f7203b9bcf1b!2s6311%20Boulevard%20Gouin%20Ouest%2C%20Montreal%2C%20QC%20H4K%201A7%2C%20Canada!5e0!3m2!1sen!2sus!4v1627748159129!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className={tailwindClasses.rightColumn}>
          <div className={tailwindClasses.details}>
            <p className={tailwindClasses.address}>
              <strong className='select-none'>{t('address:address')}:</strong> <br />
              6311 Boul Gouin Ouest Suite 103, <br />
              Montreal, Quebec, <br />
              Montreal, QC, Canada, H4K 1A7
            </p>
            <p className={tailwindClasses.contact}>
              <strong className='select-none'>{t('address:phone')} : </strong> <br />
              +1 (438) 874-1201 <br />
              +1 (438) 943-5773
            </p>
            <p className={tailwindClasses.contact}>
              <strong className='select-none'>{t('address:email')}:</strong> <br />
              <a href="mailto:shipping@ecodaqs.com" className="text-green-600 hover:text-green-700 transition-colors duration-300">shipping@ecodaqs.com</a>
            </p>
            <div className={tailwindClasses.socialLinks}>
              <a href="https://www.facebook.com/people/EcoDaqs-INC/61555581306423/" target='_blank' className={tailwindClasses.socialIcon}>
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/EcoDaqs/" target='_blank' className={tailwindClasses.socialIcon}>
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
