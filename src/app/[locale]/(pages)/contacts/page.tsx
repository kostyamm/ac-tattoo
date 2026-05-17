import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { appMeta, pageMetadata, defaultOgImage, localeMetadata, socialData } from '@/lib/appMeta';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/common/Section';
import { PageHero } from '@/components/common/PageHero';
import { Divider } from '@/components/common/Divider';
import { SocialLinks } from '@/components/common/SocialLinks';

type PageProps = { params: Promise<{ locale: string }> };

const HOW_TO_BOOK_INDICES = [0, 1, 2, 3] as const;
const WHAT_TO_SEND_INDICES = [0, 1, 2, 3, 4] as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const meta = pageMetadata.contacts[locale as keyof typeof pageMetadata.contacts] ?? pageMetadata.contacts.en;
    const localeMeta = localeMetadata[locale as keyof typeof localeMetadata] ?? localeMetadata.en;

    return {
        title: meta.title,
        description: meta.description,
        alternates: {
            canonical: `/${locale}/contacts/`,
            languages: {
                en: '/en/contacts/',
                pl: '/pl/contacts/',
                'x-default': '/en/contacts/',
            },
        },
        openGraph: {
            type: 'website',
            url: `${appMeta.url}/${locale}/contacts/`,
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

export default async function ContactsPage({ params }: PageProps) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations({ locale, namespace: 'contactsPage' });

    return (
        <>
            <PageHero title={t('heroTitle')} subtitle={t('heroSubtitle')} />

            <Section variant="none">
                <div className="wrapper lg:grid-cols-2 items-stretch">
                    <article className="border-t border-border/70 pt-8 flex h-full flex-col">
                        <p className="text-xs tracking-[0.22em] text-muted-foreground">{t('bookingLabel')}</p>

                        <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
                            {t('bookingTitle')}
                        </h3>

                        <p className="mt-6 text-muted-foreground leading-relaxed max-w-prose">
                            {t.rich('bookingDescription', {
                                strong: (chunks) => (
                                    <span className="text-foreground font-medium">{chunks}</span>
                                ),
                            })}
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            <Button asChild size="lg" className="rounded-full px-8">
                                <Link href={appMeta.bookingUrl} target="_blank" rel="noopener noreferrer">
                                    {t('bookSession')}
                                </Link>
                            </Button>

                            <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                                <Link href={socialData.email.link}>{t('email')}</Link>
                            </Button>
                        </div>
                    </article>

                    <article className="border-t border-border/70 pt-8 flex h-full flex-col min-w-0">
                        <SocialLinks label={t('links')} />

                        <div className="mt-auto">
                            <Divider />
                            <p className="mt-6 text-sm text-muted-foreground">
                                {t('preferDm')}
                            </p>
                        </div>
                    </article>

                    <article className="border-t border-border/70 pt-8">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{t('howToBookTitle')}</h3>

                        <ol className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
                            {HOW_TO_BOOK_INDICES.map((i) => (
                                <li key={i}>• {t(`howToBook.${i}`)}</li>
                            ))}
                        </ol>
                    </article>

                    <article className="border-t border-border/70 pt-8">
                        <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                            {t('whatToSendTitle')}
                        </h3>

                        <ul className="mt-6 space-y-3 text-muted-foreground leading-relaxed">
                            {WHAT_TO_SEND_INDICES.map((i) => (
                                <li key={i}>• {t(`whatToSend.${i}`)}</li>
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
