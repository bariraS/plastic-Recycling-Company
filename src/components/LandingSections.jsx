"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';

const styles = {
  container: 'font-sans select-none flex flex-col md:flex-row items-center justify-center p-6 h-[90vh] bg-fixed bg-cover bg-center relative',
  overlay: 'absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm',
  content: 'relative flex flex-col md:flex-row items-center justify-center w-full h-full',
  videoContainer: 'w-full md:w-1/2 flex justify-center mt-24  md:mt-0 invisible',
  video: 'w-full md:w-3/4 rounded-lg shadow-lg shadow-black',
  textContainer: 'w-full md:w-1/2 text-white p-6 invisible',
  title: 'text-3xl md:text-4xl font-bold mb-4 text-green-500 drop-shadow-[2px_2px_4px_var(--tw-shadow-color)] shadow-black',
  paragraph: 'text-lg md:text-xl leading-relaxed'
};

const LandingSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.set([sectionRef.current, videoRef.current, textRef.current], { visibility: 'visible' });

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 , visibility:"visible"},
      { opacity: 1, duration: 0.7 }
    );

    gsap.fromTo(
      videoRef.current,
      { opacity: 0, y: -20 , visibility:"visible"},
      { opacity: 1, y: 0, duration: 0.7, delay: 0.5 }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: -20 , visibility:"visible" },
      { opacity: 1, y: 0, duration: 0.7, delay: 0.5 }
    );

    const handleScroll = () => {
      const elements = [sectionRef.current, videoRef.current, textRef.current];
      elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          gsap.to(el, { opacity: 1, y: 0, duration: 1 });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.container} style={{ backgroundImage: "url('/landing-bg.jpg')" }}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div ref={videoRef} className={styles.videoContainer}>
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src="/tuck-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div ref={textRef} className={styles.textContainer}>
          <h1 className={styles.title}>{t("title1")} <br /> {t("title2")}</h1>
          <p className={styles.paragraph}>
          {t('description')}</p>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
