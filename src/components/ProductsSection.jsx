"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';

const tailwindClasses = {
  container: 'font-sans relative flex items-center justify-center py-16 bg-fixed bg-cover bg-center overflow-hidden border-b-4 border-stone-100',
  overlay: 'absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm overflow-hidden',
  content: 'relative z-10 max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8',
  title: 'text-3xl font-extrabold text-center text-white mb-4',
  subtitle: 'text-lg text-center text-white mb-12',
  contactGrid: 'grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1',
  singleProduct: 'text-center',
  productPicContainer: 'mx-auto mb-2 rounded-lg ring-1 border-2 border-gray-300 overflow-hidden w-72 h-72 hover:cursor-pointer hover:scale-105 transition-transform duration-300',
  productPic: 'w-full h-full object-cover',
  name: 'text-xl font-extrabold text-white',
  detail: 'text-sm text-white mb-4',
};


const ProductsSection = ({
  backgroundImage = 'url(/images/green-plants.jpg)',
  heading = "Recycled Plastic Granules"
}) => {

  const {t} = useTranslation()

  const productList = [
    {
      name: 'HDPE',
      corId: 'product-3',
      detail: `${t('productSection:hdpe')}`,
      imgSrc: '/images/newhdpeimage.webp',
    },
    {
      name: 'PET or PETE',
      corId: 'product-4',
      detail: `${t('productSection:pet')}`,
      imgSrc: '/images/pete-or-pet-plastic.jpg',
    },
    {
      name: 'PVC',
      corId: 'product-2',
      detail: `${t('productSection:pvc')}`,
      imgSrc: '/images/newpvc.webp',
    },
    {
      name: 'PP',
      corId: 'product-0',
      detail: `${t('productSection:pp')}`,
      imgSrc: '/images/pp-plastic.jpg',
    },
    {
      name: 'PS',
      corId: 'product-1',
      detail: `${t('productSection:ps')}`,
      imgSrc: '/images/PSimage.jpg',
    },
    {
      name: 'LDPE',
      corId: 'product-5',
      detail: `${t('productSection:ldpe')}`,
      imgSrc: '/images/ldpe-plastic.avif',
    },
  ];
  
  const imageRefs = useRef([]);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [sectionRef.current, headingRef.current, paraRef.current, ...imageRefs.current],
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.7, stagger: 0.1 }
    );
  }, []);

  return (
    <section
      className={tailwindClasses.container}
      style={{ backgroundImage: backgroundImage }}
      ref={sectionRef}
    >
      <div className={tailwindClasses.overlay} />
      <div className={tailwindClasses.content}>
        <h2 className={tailwindClasses.title} ref={headingRef}>
        {t('productSection:heading')}
        </h2>
        <p className={tailwindClasses.subtitle} ref={paraRef}>
        Explore some of our wide range of plastic granules    
        </p>
        <div className={tailwindClasses.contactGrid}>
          {productList.map((product, index) => (
            <div
              key={index}
              className={tailwindClasses.singleProduct}
              ref={el => (imageRefs.current[index] = el)}
              onClick={() => {
                const targetElement = document.getElementById(product.corId);
                if (targetElement) {
                  window.scrollTo({
                    top: targetElement.getBoundingClientRect().top + window.scrollY - 170,
                    behavior:"instant",
                  });
                }
              }}
            >
              <div className={tailwindClasses.productPicContainer}>
                <img
                  src={product.imgSrc}
                  alt={product.name}
                  className={tailwindClasses.productPic}
                />
              </div>
              <h3 className={tailwindClasses.name}>{product.name}</h3>
              <p className={tailwindClasses.detail}>{product.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
