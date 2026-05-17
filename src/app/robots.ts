export const dynamic = 'force-static';

import { appMeta } from '@/lib/appMeta';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [{ userAgent: '*', allow: '/' }],
        sitemap: `${appMeta.url}/sitemap.xml`,
        host: appMeta.url,
    };
}