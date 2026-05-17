import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { appMeta, pageMetadata, defaultOgImage, localeMetadata } from '@/lib/appMeta';
import { Section } from '@/components/common/Section';
import { PageHero } from '@/components/common/PageHero';
import { JsonLd } from '@/components/common/JsonLd';

type PageProps = { params: Promise<{ locale: string }> };

const FIRST24H_INDICES = [0, 1, 2, 3] as const;
const DAYS2TO14_INDICES = [0, 1, 2, 3] as const;
const AVOID_INDICES = [0, 1, 2, 3, 4] as const;
const LONGTERM_INDICES = [0, 1, 2] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const meta = pageMetadata.aftercare[locale as keyof typeof pageMetadata.aftercare] ?? pageMetadata.aftercare.en;
    const localeMeta = localeMetadata[locale as keyof typeof localeMetadata] ?? localeMetadata.en;

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `/${locale}/aftercare/`,
            languages: {
                en: '/en/aftercare/',
                pl: '/pl/aftercare/',
                'x-default': '/en/aftercare/',
            },
        },
        openGraph: {
            type: 'website',
            url: `${appMeta.url}/${locale}/aftercare/`,
            title: `${meta.title} | ${appMeta.name}`,
            description: meta.description,
            siteName: appMeta.brandName,
            locale: localeMeta.ogLocale,
            alternateLocale: [localeMeta.alternateOgLocale],
            images: [defaultOgImage],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${meta.title} | ${appMeta.name}`,
            description: meta.description,
            images: [{ url: defaultOgImage.url, alt: defaultOgImage.alt }],
        },
    };
}

export default async function AftercarePage({ params }: PageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'aftercare' });

    const howToSchema = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: t('heroTitle'),
        description: t('heroSubtitle'),
        step: [
            {
                '@type': 'HowToSection',
                name: t('first24hTitle'),
                itemListElement: FIRST24H_INDICES.map((i) => ({
                    '@type': 'HowToStep',
                    text: t(`first24h.${i}`),
                })),
            },
            {
                '@type': 'HowToSection',
                name: t('days2to14Title'),
                itemListElement: DAYS2TO14_INDICES.map((i) => ({
                    '@type': 'HowToStep',
                    text: t(`days2to14.${i}`),
                })),
            },
            {
                '@type': 'HowToSection',
                name: t('longTermTitle'),
                itemListElement: LONGTERM_INDICES.map((i) => ({
                    '@type': 'HowToStep',
                    text: t(`longTerm.${i}`),
                })),
            },
        ],
    };

    return (
        <>
            <JsonLd data={howToSchema} />

            <PageHero title={t('heroTitle')} subtitle={t('heroSubtitle')} />

            <Section variant="none">
                <div className="wrapper lg:grid-cols-2">
                    <article className="border-t border-border/70 pt-8">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                            {t('first24hTitle')}
                        </h3>
                        <ul className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
                            {FIRST24H_INDICES.map((i) => (
                                <li key={i}>• {t(`first24h.${i}`)}</li>
                            ))}
                        </ul>
                    </article>

                    <article className="border-t border-border/70 pt-8">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                            {t('days2to14Title')}
                        </h3>
                        <ul className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
                            {DAYS2TO14_INDICES.map((i) => (
                                <li key={i}>• {t(`days2to14.${i}`)}</li>
                            ))}
                        </ul>
                    </article>

                    <article className="border-t border-border/70 pt-8">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                            {t('avoidTitle')}
                        </h3>
                        <ul className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
                            {AVOID_INDICES.map((i) => (
                                <li key={i}>• {t(`avoid.${i}`)}</li>
                            ))}
                        </ul>
                    </article>

                    <article className="border-t border-border/70 pt-8">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                            {t('longTermTitle')}
                        </h3>
                        <ul className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
                            {LONGTERM_INDICES.map((i) => (
                                <li key={i}>• {t(`longTerm.${i}`)}</li>
                            ))}
                        </ul>
                    </article>
                </div>

                <div className="mt-20 border-t border-border/70 pt-8 max-w-2xl">
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {t('note')}
                    </p>
                </div>
            </Section>
        </>
    );
}
