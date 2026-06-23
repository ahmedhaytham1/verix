import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { company, getDictionary } from '@/data/content';
import { isLocale, localeMeta, locales, type Locale } from '@/lib/i18n';

const GsapEffects = dynamic(() => import('@/components/GsapEffects').then((mod) => mod.GsapEffects), {
  ssr: false,
  loading: () => null
});

const ChatBot = dynamic(() => import('@/components/ChatBot').then((mod) => mod.ChatBot), {
  ssr: false,
  loading: () => null
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const dict = getDictionary(params.locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://verix.sa/${params.locale}`,
      siteName: company.name,
      type: 'website',
      locale: params.locale === 'ar' ? 'ar_SA' : params.locale
    }
  };
}

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const dict = getDictionary(locale);
  const meta = localeMeta[locale];

  return (
    <div lang={meta.htmlLang} dir={meta.dir} data-theme="dark" className="min-h-screen">
      <ThemeProvider defaultTheme="dark" />
      <GsapEffects />
      <div className="site-shell">
        <Header locale={locale} dict={dict} />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
        <ChatBot locale={locale} dict={dict} />
        <WhatsAppButton locale={locale} label={dict.common.whatsapp} />
      </div>
    </div>
  );
}
