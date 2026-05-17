'use client';

import { useTranslations } from 'next-intl';
import { type IconName } from '@/components/Icon';
import { SectionItem } from '@/components/common/SectionItem';

const icons: IconName[] = ['shield', 'pencil', 'sparkles', 'clock', 'heart-handshake'];
const ITEM_INDICES = [0, 1, 2, 3, 4] as const;

export const WhyMe = () => {
    const t = useTranslations('whyMe');

    return (
        <div className="wrapper lg:grid-cols-2">
            {ITEM_INDICES.map((i) => (
                <SectionItem
                    key={i}
                    title={t(`${i}.title`)}
                    icon={icons[i]}
                    content={t(`${i}.text`)}
                />
            ))}
        </div>
    );
};
