import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Fragment } from 'react';
import { appMeta, localeMetadata, defaultOgImage, socialData } from '@/lib/appMeta';
import {
    Hero,
    Process,
    About,
    Works,
    WhyMe,
    Pricing,
    Instagram,
    Reviews,
    Faq,
    FinalCta,
    Contacts,
} from '@/components/blocks';
import { Section } from '@/components/common/Section';
import { JsonLd } from '@/components/common/JsonLd';

type PageProps = { params: Promise<{ locale: string }> };

const stripHtml = (str: string) => str.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const FAQ_INDICES = [0, 1, 2, 3, 4, 5, 6] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const meta = localeMetadata[locale as keyof typeof localeMetadata] ?? localeMetadata.en;

    return {
        title: { absolute: meta.title },
        description: meta.description,
        keywords: [...meta.keywords],
        alternates: {
            canonical: `/${locale}/`,
            languages: {
                en: '/en/',
                pl: '/pl/',
                'x-default': '/en/',
            },
        },
        openGraph: {
            type: 'website',
            url: `${appMeta.url}/${locale}/`,
            title: meta.title,
            description: meta.description,
            siteName: appMeta.brandName,
            locale: meta.ogLocale,
            alternateLocale: [meta.alternateOgLocale],
            images: [defaultOgImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: [{ url: defaultOgImage.url, alt: defaultOgImage.alt }],
        },
    };
}

export default async function Page({ params }: PageProps) {
    const { locale } = await params;

    setRequestLocale(locale);

    const t = await getTranslations({ locale, namespace: 'home' });
    const tFaq = await getTranslations({ locale, namespace: 'faq' });

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'TattooParlor',
        name: appMeta.brandName,
        description: localeMetadata[locale as keyof typeof localeMetadata]?.description ?? localeMetadata.en.description,
        url: appMeta.url,
        image: `${appMeta.url}${defaultOgImage.url}`,
        address: {
            '@type': 'PostalAddress',
            addressLocality: appMeta.city,
            addressCountry: 'PL',
        },
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        paymentAccepted: 'Cash, Bank Transfer',
        sameAs: [
            socialData.instagram.link,
            socialData.facebook.link,
        ],
        knowsAbout: ['Blackwork Tattoo', 'Fine Line Tattoo', 'Custom Tattoo Design', 'Tattoo Aftercare'],
        hasMap: `https://www.google.com/maps/search/${encodeURIComponent(`${appMeta.brandName} ${appMeta.city}`)}`,
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_INDICES.map((i) => ({
            '@type': 'Question',
            name: tFaq(`${i}.question`),
            acceptedAnswer: {
                '@type': 'Answer',
                text: stripHtml(tFaq(`${i}.answer`)),
            },
        })),
    };

    return (
        <Fragment>
            <JsonLd data={localBusinessSchema} />
            <JsonLd data={faqSchema} />

            <Hero />

            <Section id="works" title={t('works.title')} subtitle={t('works.subtitle')}>
                <Works />
            </Section>

            <Section id="about" title={t('about.title')} variant="spacious" centered>
                <About />
            </Section>

            <Section id="whyme" title={t('whyMe.title')} subtitle={t('whyMe.subtitle')}>
                <WhyMe />
            </Section>

            <Section
                id="process"
                title={t('process.title')}
                subtitle={t('process.subtitle')}
                variant="cinematic"
            >
                <Process />
            </Section>

            <Section id="pricing" title={t('pricing.title')} subtitle={t('pricing.subtitle')}>
                <Pricing />
            </Section>

            <Section id="reviews" title={t('reviews.title')} subtitle={t('reviews.subtitle')}>
                <Reviews />
            </Section>

            <Section id="faq" title={t('faq.title')} subtitle={t('faq.subtitle')} centered>
                <Faq />
            </Section>

            <Section id="instagram" title={t('instagram.title')} subtitle={t('instagram.subtitle')}>
                <Instagram />
            </Section>

            <Section id="contacts" title={t('contacts.title')} subtitle={t('contacts.subtitle')}>
                <Contacts />
            </Section>

            <Section id="final" variant="cinematic" centered>
                <FinalCta />
            </Section>
        </Fragment>
    );
}
