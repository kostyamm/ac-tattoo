'use client';

import { useTranslations } from 'next-intl';
import { SectionItem } from '@/components/common/SectionItem';

const STEP_INDICES = [0, 1, 2, 3, 4] as const;

export const Process = () => {
    const t = useTranslations('process');

    return (
        <div className="wrapper lg:grid-cols-2">
            {STEP_INDICES.map((i) => {
                const n = String(i + 1).padStart(2, '0');

                return (
                    <SectionItem
                        key={i}
                        title={t(`${i}.title`)}
                        meta={n}
                        content={t(`${i}.description`)}
                    />
                );
            })}
        </div>
    );
};
