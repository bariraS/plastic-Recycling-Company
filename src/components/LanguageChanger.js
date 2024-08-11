'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/../i18nConfig';
import { useState } from 'react';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(currentLocale);

  const handleLocaleChange = (locale) => {
    setSelectedLocale(locale);
    setIsOpen(false);

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${locale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + locale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${locale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="relative inline-block text-left">
      <div 
        className=" px-2 py-1 text-xs border border-gray-300 rounded-sm shadow-sm cursor-pointer flex items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={selectedLocale === 'en' ? "/en.svg" : "/fr.svg"} 
          className="inline h-4 w-4 mr-2" 
          alt={selectedLocale} 
        />
        <span>{selectedLocale === 'en' ? 'English' : 'French'}</span>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-400 rounded-lg shadow-lg z-10">
          <div
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleLocaleChange('en')}
          >
            <img src="/en.svg" className="inline h-4 w-4 mr-2" alt="English" />
            <span>English</span>
          </div>
          <div
            className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => handleLocaleChange('fr')}
          >
            <img src="/fr.svg" className="inline h-4 w-4 mr-2" alt="French" />
            <span>French</span>
          </div>
        </div>
      )}
    </div>
  );
}
