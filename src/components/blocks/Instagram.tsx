'use client';

import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { appMeta, socialData } from '@/lib/appMeta';

const STATS = [
    { label: 'posts', value: '2K+' },
    { label: 'followers', value: '8K+' },
];

export const Instagram = () => {
    const t = useTranslations('home.instagram');
    const ig = socialData.instagram;

    return (
        <div>
            {/* Header */}
            <div className="flex flex-wrap items-start gap-x-5 gap-y-3 md:gap-x-8 mb-8">
                <Image
                    src="/images/master_inst.webp"
                    alt={ig.label}
                    width={88}
                    height={88}
                    className="rounded-full size-16 md:size-20 shrink-0 object-cover"
                />

                <div className="flex-1 min-w-0">
                    <Link
                        href={ig.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-display font-bold text-base md:text-xl leading-tight truncate hover:opacity-70 transition-opacity"
                    >
                        {ig.userName?.replace('@', '')}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-0.5">
                        {appMeta.name}
                    </p>
                    <div className="flex gap-4 mt-2">
                        {STATS.map(({ label, value }) => (
                            <Link
                                key={label}
                                href={ig.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm hover:opacity-70 transition-opacity"
                            >
                                <strong className="font-semibold">{value}</strong>{' '}
                                <span className="text-muted-foreground">{label}</span>
                            </Link>
                        ))}
                    </div>
                </div>

                <Button asChild size="sm" className="ml-auto shrink-0 w-full sm:w-auto">
                    <Link href={ig.link} target="_blank" rel="noopener noreferrer">
                        {t('follow')}
                    </Link>
                </Button>
            </div>

            {/* Widget */}
            <Script
                id="behold-widget-loader"
                strategy="lazyOnload"
                dangerouslySetInnerHTML={{
                    __html: `(()=>{const d=document,s=d.createElement("script");s.type="module";s.src="https://w.behold.so/widget.js";d.head.append(s);})();`,
                }}
            />
            <behold-widget feed-id="Z9l9sXzpXOJFOpys63z9" />
        </div>
    );
};
