'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Divider } from '@/components/common/Divider';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const REVIEW_SCREENSHOTS = [
    '/images/reviews/review1.webp',
    '/images/reviews/review2.webp',
    '/images/reviews/review3.webp',
    '/images/reviews/review4.webp',
    '/images/reviews/review5.webp',
    '/images/reviews/review6.webp',
    '/images/reviews/review7.webp',
    '/images/reviews/review8.webp',
];

export const Reviews = () => {
    const t = useTranslations('reviews');

    return (
        <>
            <div className="wrapper">
                <Carousel
                    opts={{ align: 'start', loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-3">
                        {REVIEW_SCREENSHOTS.map((src, i) => (
                            <CarouselItem key={i} className="pl-3 basis-full sm:basis-1/2">
                                <div className="flex items-center justify-center h-full">
                                    <Image
                                        src={src}
                                        alt={`Review screenshot ${i + 1}`}
                                        width={0}
                                        height={0}
                                        sizes="(max-width: 640px) 100vw, 50vw"
                                        className="w-full h-auto max-h-[520px] object-contain rounded-xl bg-muted"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

            <Divider className="mt-12" />

            <p className="mt-6 text-xs text-muted-foreground">
                {t('note')}
            </p>
        </>
    );
};
