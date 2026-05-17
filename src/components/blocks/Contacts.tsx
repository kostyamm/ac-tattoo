'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { appMeta, socialData } from '@/lib/appMeta';
import { Divider } from '@/components/common/Divider';
import { SocialLinks } from '@/components/common/SocialLinks';
import Link from 'next/link';

export const Contacts = () => {
    const t = useTranslations('contacts');

    return (
        <div className="wrapper lg:grid-cols-2 items-stretch">
            <article className="border-t border-border/70 pt-8 flex h-full flex-col">
                <p className="text-xs tracking-[0.22em] text-muted-foreground">{t('label')}</p>

                <h3 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight">
                    {t('title')}
                </h3>

                <p className="mt-6 text-muted-foreground leading-relaxed max-w-prose">
                    {t.rich('description', {
                        strong: (chunks) => (
                            <span className="text-foreground font-medium">{chunks}</span>
                        ),
                    })}
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                    <Button asChild size="lg" className="rounded-full px-8">
                        <Link
                            href={appMeta.bookingUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${t('bookSession')} — open booking form`}
                        >
                            {t('bookSession')}
                        </Link>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                        <Link href={socialData.email.link} aria-label={t('email')}>
                            {t('email')}
                        </Link>
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
        </div>
    );
};
