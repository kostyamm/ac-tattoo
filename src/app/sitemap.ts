export const dynamic = 'force-static';

import { appMeta } from '@/lib/appMeta';
import { locales } from '@/i18n/config';
import type { MetadataRoute } from 'next';

type Page = {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

const pages: Page[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/contacts', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/aftercare', priority: 0.6, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    return locales.flatMap((locale) =>
        pages.map(({ path, priority, changeFrequency }) => ({
            url: `${appMeta.url}/${locale}${path}/`,
            lastModified: now,
            changeFrequency,
            priority,
        })),
    );
}
