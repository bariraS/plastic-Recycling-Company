import Introduction from "@/components/Introduction";
import LandingSection from "@/components/LandingSections";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

const i18nNamespaces = ['landing' , 'introduction'];

export default async function Home({ params: { locale } }) {

  const { t , resources} = await initTranslations(locale, i18nNamespaces);

  return (
   <>
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
    <div className="font-sans scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-200">
      <LandingSection/>
      <Introduction/>
    </div>
    </TranslationsProvider>
   </>
  );
}
