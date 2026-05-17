import '../globals.css';
import type { Metadata } from 'next';
import { Nunito, Montserrat } from 'next/font/google';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { appMeta, localeMetadata } from '@/lib/appMeta';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { routing } from '@/i18n/routing';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const nunito = Nunito({ subsets: ['latin', 'latin-ext'], variable: '--font-sans' });
const montserrat = Montserrat({ subsets: ['latin', 'latin-ext'], variable: '--font-display' });


type LocaleLayoutProps = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
    const { locale } = await params;
    const meta = localeMetadata[locale as keyof typeof localeMetadata] ?? localeMetadata.en;

    return {
        metadataBase: new URL(appMeta.url),
        title: {
            default: meta.title,
            template: `%s | ${appMeta.name}`,
        },
        description: meta.description,
        keywords: [...meta.keywords],
        authors: [{ name: appMeta.name }],
        creator: appMeta.name,
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        icons: {
            icon: [
                { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
                { url: '/images/meta/icon.svg', type: 'image/svg+xml' },
                { url: '/images/meta/icon-192x192.png', sizes: '192x192', type: 'image/png' },
            ],
            apple: [
                { url: '/images/meta/apple-touch-icon-180x180.png', sizes: '180x180', type: 'image/png' },
            ],
        },
        manifest: '/site.webmanifest',
    };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale} className={cn(nunito.variable, montserrat.variable)} suppressHydrationWarning data-scroll-behavior="smooth">
        <body className={cn(nunito.variable, montserrat.variable)}>
        <ThemeProvider>
            <NextIntlClientProvider messages={messages}>
                <Header />
                <main>{children}</main>
                <Footer />
            </NextIntlClientProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
