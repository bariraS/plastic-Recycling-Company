import Address from "@/components/Address";
import ContactSection from "@/components/ContactSection";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ['contact', 'address'];


export default async function ContactPage({ params: { locale } }) {
    const { t, resources } = await initTranslations(locale, i18nNamespaces);

    return (
        <>
            <TranslationsProvider
                namespaces={i18nNamespaces}
                locale={locale}
                resources={resources}>
                <ContactSection />
                <Address />
            </TranslationsProvider>
        </>
    )
}