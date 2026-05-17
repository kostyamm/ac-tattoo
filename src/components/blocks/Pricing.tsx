'use client';

import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Divider } from '@/components/common/Divider';

const FACTOR_INDICES = [0, 1, 2, 3, 4] as const;
const INCLUDED_INDICES = [0, 1, 2, 3] as const;
const STEP_INDICES = [0, 1, 2, 3, 4] as const;

export const Pricing = () => {
    const t = useTranslations('pricing');

    return (
        <div className="wrapper lg:grid-cols-3">
            <div className="lg:col-span-2">
                <dl className="grid gap-12 md:grid-cols-2">
                    <div>
                        <dt className="text-sm text-muted-foreground">{t('minPriceLabel')}</dt>
                        <dd className="mt-3 text-4xl font-semibold tracking-tight">
                            {t('minPriceValue')}
                        </dd>
                        <dd className="mt-3 text-sm text-muted-foreground">
                            {t('minPriceNote')}
                        </dd>
                    </div>

                    <div>
                        <dt className="text-sm text-muted-foreground">{t('depositLabel')}</dt>
                        <dd className="mt-3 text-4xl font-semibold tracking-tight">
                            {t('depositValue')}
                        </dd>
                        <dd className="mt-3 text-sm text-muted-foreground">
                            {t('depositNote')}
                        </dd>
                    </div>
                </dl>

                <div className="mt-12 grid gap-12 md:grid-cols-2">
                    <div className="border-t border-border/70 pt-8">
                        <p className="text-sm font-medium">{t('factorsTitle')}</p>
                        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                            {FACTOR_INDICES.map((i) => (
                                <li key={i}>• {t(`factors.${i}`)}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="border-t border-border/70 pt-8">
                        <p className="text-sm font-medium">{t('includedTitle')}</p>
                        <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                            {INCLUDED_INDICES.map((i) => (
                                <li key={i}>• {t(`included.${i}`)}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                    <Button asChild size="lg" className="rounded-full px-8">
                        <a href="#contacts">{t('bookSession')}</a>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                        <a href="#contacts">{t('getQuote')}</a>
                    </Button>
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                    {t('quoteNote')}
                </p>
            </div>

            <aside className="border-t border-border/70 pt-8 lg:border-t-0 lg:border-l lg:border-border/70 lg:pt-0 lg:pl-10">
                <p className="text-foreground font-medium text-smtracking-[0.22em]">
                    {t('requestTitle')}
                </p>

                <ol className="mt-5 space-y-3 text-sm text-muted-foreground">
                    {STEP_INDICES.map((i) => (
                        <li key={i}>
                            <span className="text-foreground font-medium">{i + 1}.</span> {t(`requestSteps.${i}`)}
                        </li>
                    ))}
                </ol>

                <p className="mt-6 text-sm text-muted-foreground">
                    {t('roughIdea')}
                </p>

                <Divider className="mt-10" />

                <p className="mt-6 text-sm text-muted-foreground">
                    {t.rich('replyTime', {
                        strong: (chunks) => (
                            <span className="text-foreground font-medium">{chunks}</span>
                        ),
                    })}
                </p>
            </aside>
        </div>
    );
};
