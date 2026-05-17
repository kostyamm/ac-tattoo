'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { appMeta } from '@/lib/appMeta';

export const Hero = () => {
    const t = useTranslations('hero');

    return (
        <section className="hero-section overflow-hidden">
            <Image
                src="/images/hero.webp"
                alt="Tattoo studio background"
                fill
                priority
                className="object-cover object-[58%_center] md:object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/25" />

            <div className="container-page hero-inner relative z-10">
                <div className="max-w-[560px] -translate-y-4 md:-translate-y-6">
                    <h1 className="text-white font-semibold tracking-tight leading-[0.92] text-[clamp(46px,5.8vw,82px)]">
                        {t('title')}
                    </h1>

                    <p className="mt-5 max-w-[43ch] text-base md:text-[17px] text-white/75 leading-relaxed">
                        {t('description')}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-black/20">
                            <a href="#contacts">{t('bookSession')}</a>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="rounded-full px-8 border-white/45 text-white hover:bg-white/10 hover:text-white"
                        >
                            <a href="#works">{t('works')}</a>
                        </Button>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-xs md:text-sm text-white/65">
                        <div>
                            <span className="block text-xl md:text-2xl font-semibold text-white">{t('experience')}</span>
                            {t('experienceLabel')}
                        </div>

                        <div>
                            <span className="block text-xl md:text-2xl font-semibold text-white">{t('healedTattoos')}</span>
                            {t('healedTattoosLabel')}
                        </div>

                        <div>
                            <span className="block text-xl md:text-2xl font-semibold text-white">{t('custom')}</span>
                            {t('customLabel')}
                        </div>
                    </div>

                    <p className="mt-6 text-[11px] text-white/55 tracking-[0.18em] uppercase">
                        {t('basedIn', { city: appMeta.city })}
                    </p>
                </div>
            </div>
        </section>
    );
};
