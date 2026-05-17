import type { Metadata } from 'next';
import { permanentRedirect, RedirectType } from 'next/navigation';
import { defaultLocale } from '@/i18n/config';
import { appMeta, localeMetadata, defaultOgImage } from '@/lib/appMeta';

export const metadata: Metadata = {
    metadataBase: new URL(appMeta.url),
    title: localeMetadata.en.title,
    description: localeMetadata.en.description,
    openGraph: {
        type: 'website',
        url: appMeta.url,
        title: localeMetadata.en.title,
        description: localeMetadata.en.description,
        siteName: appMeta.brandName,
        images: [defaultOgImage],
    },
    twitter: {
        card: 'summary_large_image',
        title: localeMetadata.en.title,
        description: localeMetadata.en.description,
        images: [{ url: defaultOgImage.url, alt: defaultOgImage.alt }],
    },
};

export default function RootPage() {
    permanentRedirect(`/${defaultLocale}/`, RedirectType.replace);
}
