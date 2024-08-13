"use client";
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);


const tailwindClasses = {
  section: ' select-none py-16 px-4 md:px-12 lg:px-24 bg-gray-100 text-stone-900',
  container: 'container mx-auto flex flex-col md:flex-row items-center my-16',
  image: 'w-full h-auto md:h-64 rounded-lg mb-10 shadow-lg shadow-stone-900 border-stone-900 border-2 transition-transform transform hover:scale-105 md:max-w-sm lg:max-w-md', // Added responsive size classes
  contentLeft: 'w-full md:w-1/2 lg:w-3/5 order-2 md:order-none md:pr-8 lg:pr-24 fade-in',
  contentRight: 'w-full md:w-1/2 lg:w-3/5 order-2 md:order-1 md:pl-12 lg:pl-24 fade-in',
  title: 'text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-green-600',
  paragraph: 'text-base md:text-lg mb-6 leading-relaxed text-justify',
  button: 'mt-4 px-6 py-2 border border-green-600 bg-green-600 text-white rounded-full shadow-lg hover:bg-gray-100 hover:text-green-600 transition-colors font-bold',};

const Introduction = () => {
  const { t } = useTranslation();
  const router = useRouter()
  useEffect(() => {
    gsap.utils.toArray('.fade-in').forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
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
        <div className="w-full md:w-1/2 lg:w-2/5 order-1 md:order-none fade-in">
          <img className={tailwindClasses.image} src="/images/info-1.png" alt="Éco-Daqs" />
        </div>
        <div className={tailwindClasses.contentRight}>
          <h2 className={tailwindClasses.title}>{t('introduction:welcome')}</h2>
          <p className={tailwindClasses.paragraph}>
            {t('introduction:intro1')}
          </p>
          <button className={tailwindClasses.button} onClick={()=>router.push('/about', { scroll: top })} >{t('introduction:btn1')}</button>
        </div>
      </div>
      <div className={tailwindClasses.container}>
        <div className={tailwindClasses.contentLeft}>
          <p className={tailwindClasses.paragraph}>
          {t('introduction:intro2')}
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 order-1 md:order-2 fade-in">
          <img className={tailwindClasses.image} src="/images/info-2.png" alt="Founders" />
        </div>
      </div>
      <div className={tailwindClasses.container}>
        <div className="w-full md:w-1/2 lg:w-2/5 order-1 md:order-none fade-in">
          <img className={tailwindClasses.image} src="/images/newParaImage.webp" alt="Éco-Daqs" />
        </div>
        <div className={tailwindClasses.contentRight}>
          <p className={tailwindClasses.paragraph}>
            {t('introduction:intro3')}
          </p>
        </div>
      </div>
      <div className={tailwindClasses.container}>
  <div className={tailwindClasses.contentLeft}>
    <p className={tailwindClasses.paragraph}>
      {t('introduction:intro4')}
    </p>
    <button onClick={()=>router.push('/products', { scroll: top })} className={tailwindClasses.button}>{t('introduction:btn2')}</button>
  </div>
  <div className="w-full md:w-1/2 lg:w-2/5 order-1 md:order-2 fade-in">
    <img className={tailwindClasses.image} src="/images/info-3.png" alt="Recycled Plastics" />
  </div>
</div>
<div className={tailwindClasses.container}>
  <div className="w-full md:w-1/2 lg:w-2/5 order-2 md:order-1 fade-in">
    <img className={tailwindClasses.image} src="/images/imageofjoin1.png" alt="Sustainability" />
  </div>
  <div className={tailwindClasses.contentRight}>
    <p className={tailwindClasses.paragraph}>
      {t('introduction:intro5')}
    </p>
  </div>
</div>
    </section>
  );
};

export default Introduction;
