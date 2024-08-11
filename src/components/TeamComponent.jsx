"use client";

import { useEffect, useRef } from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const tailwindClasses = {
  container: 'select-none font-sans py-16 px-4 sm:px-6 lg:px-8 bg-stone-100',
  title: 'text-3xl font-extrabold text-center text-green-600 mb-4',
  subtitle: 'text-lg text-center text-gray-500 mb-12',
  teamGrid: 'grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1',
  teamMember: 'text-center',
  avatarContainer: 'mx-auto mb-7 rounded-2xl shadow-lg shadow-stone-800 overflow-hidden size-72',
  avatar: 'w-full h-full object-cover',
  name: 'text-xl font-bold text-gray-900',
  position: 'text-sm text-gray-500 mb-4',
  icons: 'flex justify-center space-x-4'
};



const TeamComponent = () => {
  const {t} = useTranslation()
  const imageRefs = useRef([]);
  const headingRef = useRef(null)
  const paraRef = useRef(null)


  const teamMembers = [
    {
      name: 'Arturo Quiroga',
      position: `${t('team:position1')}`,
      imgSrc: '/images/team/arturo.jpeg',
      email: 'mailto:info@ecodaqs.com',
      linkedin: 'https://www.linkedin.com/in/arturo-quiroga-66a810165/'
    },
    {
      name: 'Abdul Wadood',
      position: `${t('team:position2')}`,
      imgSrc: '/images/team/wadood-pic.jpeg',
      email: 'mailto:Shipping@ecodaqs.com',
      linkedin: 'https://www.linkedin.com/in/abdul-wadood-301180267/'
    },
  
  ];
  useEffect(() => {
    imageRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: 100},
        {
          y: 0,
          scrollTrigger: {
            trigger: el,
            start: 'top 100%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
    });

    gsap.fromTo([paraRef.current, headingRef.current], 
        {y: 50}, 
        {
            y: 0,

          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 100%", // when the top of the image hits the bottom of the viewport
            end: "bottom 80%", // when the bottom of the image hits the top of the viewport
            scrub: true,
          }
        }
      );
   
  }, []);

  return (
    <div className={tailwindClasses.container}>
    <div className=' mx-auto  w-[70vw]'>
      <h2 ref={headingRef} className={tailwindClasses.title}>{t('team:heading')}</h2>
      <p ref={paraRef} className={tailwindClasses.subtitle}>{t('team:para')}</p>
      <div className={tailwindClasses.teamGrid}>
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={tailwindClasses.teamMember}
            ref={(el) => (imageRefs.current[index] = el)}
          >
            <div className={tailwindClasses.avatarContainer}>
              <img src={member.imgSrc} alt={member.name} className={tailwindClasses.avatar} />
            </div>
            <h3 className={tailwindClasses.name}>{member.name}</h3>
            <p className={tailwindClasses.position}>{member.position}</p>
            <div className={tailwindClasses.icons}>
              <a href={member.email} target='_blank' className="text-gray-500 hover:text-green-600">
                <FaEnvelope size={24} />
              </a>
              <a href={member.linkedin} target='_blank' className="text-gray-500 hover:text-green-600">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default TeamComponent;
