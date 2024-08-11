import ProductDetail from "@/components/ProductDetail";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ['productDetails'];


export default async function PanelPage ({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return(
        <>
        <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
       <ProductDetail bgUrl="./images/landing-image.jpg"/>
       </TranslationsProvider>
        </>
    )
}