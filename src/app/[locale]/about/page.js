import TeamComponent from "@/components/TeamComponent";
import Timeline from "@/components/TimelineSection";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
const i18nNamespaces = ['timeline' , 'team'];



export default async function TimelinePage({ params: { locale } }) {

  const { t , resources} = await initTranslations(locale, i18nNamespaces);


    return (
    <>
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}>
    <Timeline />
    <TeamComponent/>
    </TranslationsProvider>
    </>)
  }
  