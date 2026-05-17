'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';

type Work = {
    src: string;
    alt: string;
};

const works: Work[] = [
    { src: "/images/works/work1.webp", alt: "Tattoo by Anastasiya Cherepanova #1" },
    { src: "/images/works/work2.webp", alt: "Tattoo by Anastasiya Cherepanova #2" },
    { src: "/images/works/work3.webp", alt: "Tattoo by Anastasiya Cherepanova #3" },
    { src: "/images/works/work4.webp", alt: "Tattoo by Anastasiya Cherepanova #4" },
    { src: "/images/works/work5.webp", alt: "Tattoo by Anastasiya Cherepanova #5" },
    { src: "/images/works/work6.webp", alt: "Tattoo by Anastasiya Cherepanova #6" },
    { src: "/images/works/work7.webp", alt: "Tattoo by Anastasiya Cherepanova #7" },
    { src: "/images/works/work8.webp", alt: "Tattoo by Anastasiya Cherepanova #8" },
    { src: "/images/works/work9.webp", alt: "Tattoo by Anastasiya Cherepanova #9" },
    { src: "/images/works/work10.webp", alt: "Tattoo by Anastasiya Cherepanova #10" },
    { src: "/images/works/work11.webp", alt: "Tattoo by Anastasiya Cherepanova #11" },
    { src: "/images/works/work12.webp", alt: "Tattoo by Anastasiya Cherepanova #12" },
    { src: "/images/works/work13.webp", alt: "Tattoo by Anastasiya Cherepanova #13" },
    { src: "/images/works/work14.webp", alt: "Tattoo by Anastasiya Cherepanova #14" },
    { src: "/images/works/work15.webp", alt: "Tattoo by Anastasiya Cherepanova #15" },
    { src: "/images/works/work16.webp", alt: "Tattoo by Anastasiya Cherepanova #16" },
    { src: "/images/works/work17.webp", alt: "Tattoo by Anastasiya Cherepanova #17" },
    { src: "/images/works/work18.webp", alt: "Tattoo by Anastasiya Cherepanova #18" },
    { src: "/images/works/work19.webp", alt: "Tattoo by Anastasiya Cherepanova #19" },
    { src: "/images/works/work20.webp", alt: "Tattoo by Anastasiya Cherepanova #20" },
    { src: "/images/works/work21.webp", alt: "Tattoo by Anastasiya Cherepanova #21" },
    { src: "/images/works/work22.webp", alt: "Tattoo by Anastasiya Cherepanova #22" },
    { src: "/images/works/work23.webp", alt: "Tattoo by Anastasiya Cherepanova #23" },
    { src: "/images/works/work24.webp", alt: "Tattoo by Anastasiya Cherepanova #24" },
    { src: "/images/works/work25.webp", alt: "Tattoo by Anastasiya Cherepanova #25" },
];

const MOBILE_LIMIT = 6;

export const Works = () => {
    const t = useTranslations('home.works');
    const [expanded, setExpanded] = useState(false);
    const showMoreRef = useRef<HTMLDivElement>(null);

    const collapse = () => {
        setExpanded(false);
        requestAnimationFrame(() => {
            showMoreRef.current?.scrollIntoView({ behavior: 'instant', block: 'center' });
        });
    };

    return (
        <>
            <div className="columns-2 md:columns-3 2xl:columns-4 gap-3 md:gap-4">
                {works.map((work, index) => (
                    <figure
                        key={work.src}
                        className={[
                            'group mb-3 md:mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-border/70 bg-transparent',
                            'transition-[transform,border-color,opacity] duration-300 hover:border-border hover:-translate-y-0.5',
                            index >= MOBILE_LIMIT && !expanded ? 'hidden md:block' : '',
                        ].join(' ')}
                    >
                        <div className="relative">
                            <Image
                                src={work.src}
                                alt={work.alt}
                                width={1200}
                                height={1200}
                                priority={index < 2}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
                                className="h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                            />
                        </div>
                    </figure>
                ))}
            </div>

            {!expanded && (
                <div ref={showMoreRef} className="mt-6 flex justify-center md:hidden">
                    <Button
                        variant="outline"
                        onClick={() => setExpanded(true)}
                        className="gap-2"
                    >
                        {t('showMore')} <Icon icon="chevron-down" size={16} />
                    </Button>
                </div>
            )}

            {expanded && (
                <div className="sticky bottom-6 mt-6 flex justify-center md:hidden">
                    <Button
                        variant="outline"
                        onClick={collapse}
                        className="gap-2 shadow-lg bg-background/80 backdrop-blur-sm border-border/60"
                    >
                        {t('showLess')} <Icon icon="chevron-up" size={16} />
                    </Button>
                </div>
            )}
        </>
    );
};
