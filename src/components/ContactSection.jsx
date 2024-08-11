"use client";

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const tailwindClasses = {
  container: 'relative min-h-[90vh] flex items-center justify-center py-8 bg-fixed bg-cover bg-center invisible',
  overlay: 'absolute inset-0 bg-black opacity-60',
  content: 'relative z-10 w-full max-w-3xl px-6 py-10 bg-white bg-opacity-90 rounded-lg shadow-lg',
  title: 'select-none text-3xl font-bold text-center text-gray-800 mb-6 text-green-600',
  form: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  input: 'w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500',
  textarea: 'w-full p-3 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 md:col-span-2',
  buttonContainer: 'md:col-span-2 text-center',
  button: 'px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition duration-300',
};

const ContactSection = () => {
  const {t} = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);


  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 , y: -20, visibility:"visible"},
      { opacity: 1,y:0, duration: 0.7 }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0 , y: -20, visibility:"visible"},
      { opacity: 1,y:0, duration: 0.7 }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(`${t('sending')}`);
    console.log(JSON.stringify(formData));
    console.log(process.env.AUTH_PASS);
    
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus(`${t('successmsg')}`);
      } else {
        setStatus(`${t('failedmsg')}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus(`${t('errormsg')}`);
    }
  };


  return (
    <section ref={sectionRef} className={tailwindClasses.container} style={{ backgroundImage: `url('/images/bird-pic.jpg')` }}>
      <div ref={overlayRef} className={tailwindClasses.overlay}></div>
      <div ref={contentRef} className={tailwindClasses.content}>
        <h2 className={tailwindClasses.title}>{t('heading')}</h2>
        <form className={tailwindClasses.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={`${t('nameplace')}`}
            value={formData.name}
            onChange={handleChange}
            className={tailwindClasses.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={`${t('emailplace')}`}
            value={formData.email}
            onChange={handleChange}
            className={tailwindClasses.input}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder={`${t('phoneplace')}`}
            value={formData.phone}
            onChange={handleChange}
            className={tailwindClasses.input}
            required
          />
          <textarea
            name="message"
            placeholder={`${t('msgplace')}`}
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={tailwindClasses.textarea}
            required
          ></textarea>
          <div className={tailwindClasses.buttonContainer}>
            <button type="submit" className={tailwindClasses.button}>{t("btn")}</button>
          </div>
        </form>
        {status && <p>{status}</p>}
      </div>
    </section>
  );
};

export default ContactSection;
