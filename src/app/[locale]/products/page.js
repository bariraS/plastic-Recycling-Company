
import ProductDetail from "@/components/ProductDetail"
import ProductsSection from "@/components/ProductsSection"
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ['productDetails', 'productSection'];



export default async function ProductPage ({ params: { locale } }) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);


    return(
      <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
        <div>
        <ProductsSection  />
        <ProductDetail  />
      </div>
      </TranslationsProvider>
    )
}