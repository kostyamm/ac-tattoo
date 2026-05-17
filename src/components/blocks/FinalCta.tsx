'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export const FinalCta = () => {
    const t = useTranslations('finalCta');

    return (
        <div className="text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
                {t('title')}
            </h3>

            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {t('description')}
            </p>

            <div className="mt-12 flex sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                    <a href="#contacts">{t('bookSession')}</a>
                </Button>

                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <a href="#contacts">{t('getQuote')}</a>
                </Button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
                {t('note')}
            </p>
        </div>
    );
};
