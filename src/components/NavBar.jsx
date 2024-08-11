// components/Navbar.jsx
"use client";

import gsap from 'gsap';
import { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import Logo3D from './Logo3d';
import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';

const tailwindClasses = {
  navbar: 'flex items-center justify-between px-8 fixed w-full top-0 z-50 shadow-lg text-black transition-transform duration-300 font-sans bg-white bg-opacity-60 backdrop-blur-lg',
  logoContainer: 'flex items-center text-yellow-400 text-2xl font-bold opacity-0',
  navLinks: 'hidden md:flex items-center space-x-6 opacity-0 font-bold',
  navLink: 'text-stone-700 hover:text-green-600 transition-colors duration-300',
  uppercaseNavLink: 'uppercase',
  menuIcon: 'md:hidden text-black text-2xl cursor-pointer',
  dropdown: 'absolute right-8 top-16 mt-2 w-48 bg-white rounded-lg shadow-lg text-black',
  dropdownItem: 'block px-4 py-2 text-sm hover:bg-gray-100 transition-colors duration-300',
};

const Navbar = () => {
  const { t } = useTranslation();
  const navlinkRef = useRef(null);
  const logoRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => setIsMenuOpen(false);

  useEffect(() => {
    gsap.fromTo(
      [navlinkRef.current, logoRef.current],
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    );

    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
      } else {
        nav.classList.remove('shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={tailwindClasses.navbar}>
      <div className={tailwindClasses.logoContainer} ref={logoRef}>
        <Logo3D />
      </div>
      <div className={tailwindClasses.navLinks} ref={navlinkRef}>
        <Link className={tailwindClasses.navLink} href="/">{t('home')}</Link>
        <Link className={tailwindClasses.navLink} href="/about">{t('about')}</Link>
        <Link className={tailwindClasses.navLink} href="/products">{t('products')}</Link>
        <Link className={`${tailwindClasses.navLink} ${tailwindClasses.uppercaseNavLink}`} href="/application">{t('application')}</Link>
        <Link className={tailwindClasses.navLink} href="/contact">{t('contact')}</Link>
        <LanguageChanger />
      </div>
      <FaBars className={tailwindClasses.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <div className={tailwindClasses.dropdown}>
          <Link className={tailwindClasses.dropdownItem} href="/" onClick={handleMenuClose}>{t('home')}</Link>
          <Link className={tailwindClasses.dropdownItem} href="/about" onClick={handleMenuClose}>{t('about')}</Link>
          <Link className={tailwindClasses.dropdownItem} href="/products" onClick={handleMenuClose}>{t('products')}</Link>
          <Link className={`${tailwindClasses.dropdownItem} ${tailwindClasses.uppercaseNavLink}`} href="/application" onClick={handleMenuClose}>{t('application')}</Link>
          <Link className={tailwindClasses.dropdownItem} href="/contact" onClick={handleMenuClose}>{t('contact')}</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
