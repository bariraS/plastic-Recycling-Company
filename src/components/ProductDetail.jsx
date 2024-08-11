"use client"

import React, { useState, useEffect, useTransition } from 'react';
import Image from 'next/image';
import { FaRecycle } from 'react-icons/fa';
import { IoMdInformationCircle } from 'react-icons/io';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const styles = {
    container: 'font-sans container py-10 px-5 bg-fixed bg-cover bg-center max-w-[100vw] relative',
    overlay: 'absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm',
    card: 'relative max-w-4xl mx-auto my-16 bg-white bg-opacity-80 rounded-lg shadow-xl shadow-stone-800 border border-2 border-stone-900 overflow-hidden bg-opacity-50 backdrop-blur-sm',
    section: 'p-4 sm:p-6',
    header: 'flex items-center justify-between',
    title: 'text-2xl font-extrabold text-green-600' ,
    subtitle: 'text-sm text-gray-600 font-bold',
    hr: 'my-4',
    heading: 'text-lg font-extrabold mb-2',
    text: 'text-sm',
    list: 'list-disc list-inside text-sm',
    listItem: 'mb-2',
    image: 'my-4 rounded-lg',
    productImageCard: 'bg-gray-100 p-4 rounded-lg shadow-md flex-shrink-0 mr-4 bg-opacity-50',
    productImage: 'rounded-lg',
    productName: 'text-lg font-bold text-center',
    productImagesContainer: 'flex overflow-x-auto pb-4',
    productImageSmall: 'w-32 h-32 object-cover rounded-lg',
    recycledMaterialCard: 'inline-flex items-center p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300 w-64 bg-opacity-50',
    recycledMaterialIcon: 'text-green-500 mr-2',
    recycledMaterialText: 'text-sm font-bold',
};



const Modal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    const handleBackgroundClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleBackgroundClick}>
            <div className="relative">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 m-4 text-white text-xl font-bold"
                >
                    &times;
                </button>
                <Image src={imageSrc} alt="Full Size Image" width={800} height={800} className="rounded-lg" />
            </div>

        </div>
    );
};

const ProductDetail = ({
    bgUrl = './images/green-field.jpg'
}) => {

const { t } = useTranslation()

    const products = [
        {
          name: `${t('ppname')}`,
          SymbalNum: "5",
          overview: `${t('ppview')}`,
          applications: [
            { name: `${t('ppapp1')}`, image: '/images/products/plastic-bottles-pp.png' },
            { name: `${t('ppapp2')}`, image: '/images/products/plastic-containers-pp.png' },
            { name: `${t('ppapp3')}`, image: '/images/products/packaging-mat-pp.png' },
            { name: `${t('ppapp4')}`, image: '/images/products/textile-pp.png' },
            { name: `${t('ppapp5')}`, image: '/images/products/lab-eq-pp.png' },
            { name: `${t('ppapp6')}`, image: '/images/products/auto-parts-pp.png' }
          ],
          specifications: [`${t('density')}: 0.905 g/cm³`, `${t('melt')}: 160-165°C`, `${t('tense')}: 31 MPa`, `${t('mod')}: 1500 MPa`],
          subcategories: [`${t('ppsub1')}`, `${t('ppsub2')}`],
          recycledMaterialImageSrc: '/images/products/pp-recyle.png',
          recycleTimes: `${t('pprec')}`,
        },
        {
          name: `${t('psname')}`,
          SymbalNum: "6",
          overview: `${t('psview')}`,
          applications: [
            { name: `${t('psapp1')}`, image: '/images/products/ps-disposible-cups.png' },
            { name: `${t('psapp2')}`, image: '/images/products/ps-cd-cases.png' },
            { name: `${t('psapp3')}`, image: '/images/products/ps-disposible-dinnerware.png' },
            { name: `${t('psapp4')}`, image: '/images/products/ps-model.png' },
            { name: `${t('psapp5')}`, image: '/images/products/ps-install-mat.png' }
          ],
          specifications: [`${t('density')}: 1.04-1.06 g/cm³`, `${t('melt')}: 240°C`, `${t('tense')}: 35-55 MPa`, `${t('mod')}: 3000-3600 MPa`],
          subcategories: [`${t('pssub1')}`, `${t('pssub2')}`],
          recycledMaterialImageSrc: '/images/products/ps-recycle.png',
          recycleTimes: `${t('psrec')}`,
        },
        {
          name:  `${t('pvcname')}`,
          SymbalNum: "3",
          overview: `${t('pvcview')}`,
          applications: [
            { name: `${t('pvcapp1')}`, image: '/images/products/pvc-pipes.png' },
            { name: `${t('pvcapp2')}`, image: '/images/products/pvc-vinyl-floor.png' },
            { name: `${t('pvcapp3')}`, image: '/images/products/pvc-electric-cable.png' },
            { name: `${t('pvcapp4')}`, image: '/images/products/pvc-healthcare.png' },
          ],
          specifications: [`${t('density')}: 1.38 g/cm³`, `${t('melt')}: 100-260°C`, `${t('tense')}: 2.60 N/mm²`, `${t('mod')}: 2900-3400 MPa`],
          subcategories: [`${t('pvcsub1')}`, `${t('pvcsub2')}`],
          recycledMaterialImageSrc: '/images/products/ps-recycle.png',
          recycleTimes: `${t('pvcrec')}`,
        },
        {
          name: `${t('hdname')}`,
          SymbalNum: "2",
          overview: `${t('hdview')}`,
          applications: [
            { name: `${t('hdapp1')}`, image: '/images/products/hdpe-milk.png' },
            { name: `${t('hdapp2')}`, image: '/images/products/hdpe-detergent.png' },
            { name: `${t('hdapp3')}`, image: '/images/products/hdpe-piping.png' },
            { name: `${t('hdapp4')}`, image: '/images/products/hdpe-lumber.png' },
          ],
          specifications: [`${t('density')}: 0.941-0.965 g/cm³`, `${t('melt')}: 130.8°C`, `${t('tense')}: 37 MPa`, `${t('mod')}: 950-1650 MPa`],
          subcategories: [`${t('hdsub1')}`, `${t('hdsub2')}`, `${t('hdsub3')}`],
          recycledMaterialImageSrc: '/images/products/hdpe-recycle.png',
          recycleTimes: `${t('hdrec')}`,
        },
        {
          name: `${t('petname')}`,
          SymbalNum: "1",
          overview: `${t('petview')}`,
          applications: [
            { name: `${t('petapp1')}`, image: '/images/products/pet-plastic-bottles.png' },
            { name: `${t('petapp2')}`, image: '/images/products/pet-food-jar.png' },
            { name: `${t('petapp3')}`, image: '/images/products/pet-synthetic-fiber.png' },
            { name: `${t('petapp4')}`, image: '/images/products/pet-theraform-tray.png' },
          ],
          specifications: [`${t('density')}: 1.38 g/cm³`, `${t('melt')}: 250°C`, `${t('tense')}: 55-75 MPa`, `${t('mod')}: 2800-3100 MPa`],
          subcategories: [`${t('petsub1')}`, `${t('petsub2')}`],
          recycledMaterialImageSrc: '/images/products/pet-recyle.png',
          recycleTimes: `${t('petrec')}`,
        },
        {
          name: `${t('ldname')}`,
          SymbalNum: "4",
          overview: `${t('ldview')}`,
          applications: [
            { name: `${t('ldapp1')}`, image: '/images/products/ldpe-plastic-bags.png' },
            { name: `${t('ldapp2')}`, image: '/images/products/ldpe-sqeeze-bottles.png' },
            { name: `${t('ldapp3')}`, image: '/images/products/dispensing bottles.png' },
            { name: `${t('ldapp4')}`, image: '/images/products/ldpe-tubing.png' },
          ],
          specifications: [`${t('density')}: 0.910-0.940 g/cm³`, `${t('melt')}: 105-115°C`, `${t('tense')}: 8-12 MPa`, `${t('mod')}: 200-300 MPa`],
          subcategories: [`${t('hdsub1')}`, `${t('hdsub2')}`, `${t('hdsub3')}`],
          recycledMaterialImageSrc: '/images/products/ldpe-recycle.png',
          recycleTimes: `${t('hdrec')}`,
        },
      ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

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
        <div className={styles.container} style={{ backgroundImage: `url(${bgUrl})` }}>
            <div className={styles.overlay}></div>
            {products.map((product, index) => (
                <div key={product.name} id={`product-${index}`} className="relative top-[-100] fade-in">
                    <div className={styles.card}>
                        <div className={styles.section}>
                            <div className={styles.header}>
                                <div>
                                    <h2 className={styles.title}>{product.name}</h2>
                                    <p className={styles.subtitle}>{t('commanpara')}</p>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-2xl font-semibold">{product.SymbalNum}</span>
                                    <FaRecycle size={24} className="text-green-500 ml-2" />
                                </div>
                            </div>
                            <hr className={styles.hr} />
                            <div>
                                <h3 className={styles.heading}>{t('view')}</h3>
                                <p className={styles.text}>{product.overview}</p>
                            </div>
                            <div className="mt-4">
                                <h3 className={styles.heading}>{t('mat')}</h3>
                                <div className={styles.recycledMaterialCard}>
                                    <IoMdInformationCircle size={24} className={styles.recycledMaterialIcon} />
                                    <div>
                                        <Image
                                            src={product.recycledMaterialImageSrc}
                                            alt={product.name}
                                            width={100}
                                            height={100}
                                            className={styles.productImageSmall}
                                            onClick={() => openModal(product.recycledMaterialImageSrc)}
                                        />
                                        <p className={styles.recycledMaterialText}>{t('times')}: <span className="font-medium">{product.recycleTimes}</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className={styles.heading}>{t('app')}</h3>
                                <div className={styles.productImagesContainer}>
                                    {product.applications.map((application, index) => (
                                        <div key={index} className={styles.productImageCard}>
                                            <Image
                                                src={application.image}
                                                alt={application.name}
                                                width={150}
                                                height={150}
                                                className={styles.productImageSmall}
                                                onClick={() => openModal(application.image)}
                                            />
                                            <h4 className={styles.productName}>{application.name}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className={styles.heading}>{t('tech')}</h3>
                                <ul className={styles.list}>
                                    {product.specifications.map((specification, index) => (
                                        <li key={index} className={styles.listItem}>{specification}</li>
                                    ))}
                                </ul>
                            </div>
                            {product.subcategories.length > 0 && (
                                <div className="mt-4">
                                    <h3 className={styles.heading}>{t('subs')}</h3>
                                    <ul className={styles.list}>
                                        {product.subcategories.map((subcategory, index) => (
                                            <li key={index} className={styles.listItem}>{subcategory}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
        </div>
    );
};

export default ProductDetail;
