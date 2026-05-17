'use client';

import { useTranslations } from 'next-intl';

export const About = () => {
    const t = useTranslations('about');

    return (
        <div className="mx-auto max-w-3xl">
            <p className="text-2xl md:text-3xl leading-snug text-foreground font-medium tracking-tight">
                {t('intro')}
            </p>

            <div className="mt-10 space-y-8 text-base md:text-lg leading-relaxed text-muted-foreground">
                <p>{t('p1')}</p>
                <p>{t('p2')}</p>
                <p>{t('p3')}</p>
                <p>{t('p4')}</p>
            </div>

            <p className="mt-12 text-foreground font-medium">
                {t('ps')}
            </p>
        </div>
    );
};
