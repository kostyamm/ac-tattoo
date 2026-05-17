'use client';

import { type FC } from 'react';
import { useLocale } from 'next-intl';
import { Icon } from '@/components/Icon';
import { useRouter, usePathname } from '@/i18n/navigation';
import { locales, localeNames, type Locale } from '@/i18n/config';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

export const LocaleSelect: FC = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (value: string) => {
        router.replace(pathname, { locale: value as Locale });
    };

    return (
        <Select value={locale} onValueChange={handleChange}>
            <SelectTrigger className="w-auto gap-2 border-border/50 bg-transparent text-xs text-muted-foreground" aria-label={`Language: ${locale.toUpperCase()}`}>
                <Icon icon="world" size={16} />
                <SelectValue />
            </SelectTrigger>
            <SelectContent position="popper">
                {locales.map((loc) => (
                    <SelectItem key={loc} value={loc}>
                        {localeNames[loc]}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};
