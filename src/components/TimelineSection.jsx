"use client"

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const tailwindClasses = {
  section: 'select-none font-sans bg-black text-white py-4 relative',
  overlay: 'absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm',
  container: 'relative container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24 z-10',
  leftColumn: 'flex flex-col w-full md:w-1/3 mt-2 md:mt-12 mt-20 px-8 md:sticky ',
  processText: 'ml-2 text-green-500 uppercase tracking-loose',
  heading: 'text-2xl md:text-3xl font-bold leading-normal md:leading-relaxed mb-2',
  description: 'text-sm md:text-base text-gray-50 mb-4',
  exploreButton: 'cursor-pointer bg-transparent mr-auto hover:bg-green-500 text-green-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-green-500 hover:border-transparent',
  rightColumn: 'ml-0 md:ml-12 lg:w-2/3',
  timelineContainer: 'container mx-auto w-full h-full',
  timelineWrapper: 'relative wrap overflow-hidden p-10 h-full',
  borderLine: 'absolute h-full border',
  leftTimeline: 'mb-8 flex justify-between flex-row-reverse items-center w-full',
  rightTimeline: 'mb-8 flex justify-between items-center w-full',
  timelineDate: 'mb-3 text-base text-green-500',
  timelineTitle: 'mb-3 font-bold text-lg md:text-2xl',
  timelineText: 'text-sm md:text-base leading-snug text-gray-50 text-opacity-100',
  timelineImage: 'w-full rounded-lg'
};

const Timeline = () => {
  const {t} = useTranslation()
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);
  const sectionRef = useRef(null);

  const router = useRouter()
  useEffect(() => {
    gsap.fromTo(
      leftColumnRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8,delay: 0.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.8,delay: 0.5, ease: 'power3.out' }
    );
    gsap.fromTo(
      rightColumnRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8,delay: 0.5, ease: 'power3.out' }
    );
  }, []);

  return (
    <section ref={sectionRef} className={tailwindClasses.section} style={{ backgroundImage: 'url(./images/timeline/background-pic.jpg)', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className={tailwindClasses.overlay}></div>
      <div className={tailwindClasses.container}>
        <div className={tailwindClasses.leftColumn} ref={leftColumnRef} style={{ top: 'calc(50% + 50px)', transform: 'translateY(-50%)' }}>
          <p className={tailwindClasses.processText}>{t('leftSmallHeading')}</p>
          <p className={tailwindClasses.heading}>{t('leftBigHeading')}</p>
          <p className={tailwindClasses.description}>
          {t('leftDescription')}
          </p>
          <a onClick={()=>router.push("/contact", {scroll:top})} className={tailwindClasses.exploreButton}>{t('leftBtn')}</a>
        </div>
        <div className={tailwindClasses.rightColumn} ref={rightColumnRef} style={{ marginTop: '-80px' }}>
          <div className={tailwindClasses.timelineContainer}>
            <div className={tailwindClasses.timelineWrapper}>
              <div className={`${tailwindClasses.borderLine} border-green-500`} style={{ right: '50%', border: '1px solid #16a34a', borderRadius: '5%' }}></div>
              <div className={`${tailwindClasses.borderLine} border-green-500`} style={{ left: '50%', border: '1px solid #16a34a', borderRadius: '5%' }}></div>
              
              <div className={`${tailwindClasses.leftTimeline} left-timeline`}>
                <div className="order-1 w-5/12">
                  <img src="/images/timeline/founding-timeline.jpeg" alt="Founding" className={tailwindClasses.timelineImage} />
                </div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <h4 className={tailwindClasses.timelineTitle}>{t('heading1')}</h4>
                  <p className={tailwindClasses.timelineText}>
                  {t('para1')}
                  </p>
                </div>
              </div>
              
              <div className={`${tailwindClasses.rightTimeline} right-timeline`}>
                <div className="order-1 w-5/12">
                  <img src="/images/timeline/launching-timeline.jpeg" alt="First Product Launch" className={tailwindClasses.timelineImage} />
                </div>
                <div className="order-1 w-5/12 px-1 py-4 text-left">
                  <h4 className={tailwindClasses.timelineTitle}>{t('heading2')}</h4>
                  <p className={tailwindClasses.timelineText}>
                  {t('para2')}
                  </p>
                </div>
              </div>
              
              <div className={`${tailwindClasses.leftTimeline} left-timeline`}>
                <div className="order-1 w-5/12">
                  <img src="/images/timeline/expension-timeline.jpeg" alt="Expansion" className={tailwindClasses.timelineImage} />
                </div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <h4 className={tailwindClasses.timelineTitle}>{t('heading3')}</h4>
                  <p className={tailwindClasses.timelineText}>
                  {t('para3')}
                  </p>
                </div>
              </div>
              
              <div className={`${tailwindClasses.rightTimeline} right-timeline`}>
                <div className="order-1 w-5/12">
                  <img src="/images/newourservices.webp" alt="Awards" className={tailwindClasses.timelineImage} />
                </div>
                <div className="order-1 w-5/12 px-1 py-4 text-left">
                  <h4 className={tailwindClasses.timelineTitle}>{t('heading4')}</h4>
                  <p className={tailwindClasses.timelineText}>
                  {t('para4')}
                  </p>
                </div>
              </div>
              
              <div className={`${tailwindClasses.leftTimeline} left-timeline`}>
                <div className="order-1 w-5/12">
                  <img src="/images/timeline/future-timeline.jpeg" alt="Future" className={tailwindClasses.timelineImage} />
                </div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <h4 className={tailwindClasses.timelineTitle}>{t('heading5')}</h4>
                  <p className={tailwindClasses.timelineText}>
                  {t('para5')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
