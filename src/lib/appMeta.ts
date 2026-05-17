import { type IconName } from '@/components/Icon';

export const appMeta = {
    name: 'Anastasiya Cherepanova',
    brandName: 'Cherepanova Tattoo',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cherepanova.tattoo',
    city: 'Warsaw',
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://forms.gle/your-google-form',
};

export const defaultOgImage = {
    url: '/images/meta/og-1200x630.webp',
    width: 1200,
    height: 630,
    alt: `${appMeta.brandName} — ${appMeta.city}`,
    type: 'image/webp' as const,
};

export const localeMetadata = {
    en: {
        title: 'Tattoo Artist in Warsaw | Anastasiya Cherepanova',
        description:
            'Custom pieces created with care, detail, and personal meaning. Clean lines, relaxed atmosphere, and artwork made to stay beautiful for years.',
        keywords: [
            'tattoo Warsaw',
            'blackwork tattoo Warsaw',
            'fine line tattoo',
            'custom tattoo design',
            'tattoo artist Warsaw',
            'Anastasiya Cherepanova',
            'tatuaż Warszawa',
        ],
        ogLocale: 'en_US',
        alternateOgLocale: 'pl_PL',
    },
    pl: {
        title: 'Tatuażystka w Warszawie | Anastasiya Cherepanova',
        description:
            'Indywidualne tatuaże blackwork i fine line w Warszawie. Rezerwacja online — sterylne studio, projekty na zamówienie, 8+ lat doświadczenia.',
        keywords: [
            'tatuaż Warszawa',
            'blackwork tatuaż Warszawa',
            'fine line tatuaż',
            'projekt tatuażu na zamówienie',
            'tatuażystka Warszawa',
            'Anastasiya Cherepanova',
        ],
        ogLocale: 'pl_PL',
        alternateOgLocale: 'en_US',
    },
} as const;

export const pageMetadata = {
    aftercare: {
        en: {
            title: 'Tattoo Aftercare Guide',
            description:
                'Complete tattoo aftercare instructions: first 24 hours, daily routine, what to avoid, and long-term care for beautiful, lasting results.',
        },
        pl: {
            title: 'Pielęgnacja Tatuażu — Poradnik',
            description:
                'Kompletny poradnik pielęgnacji tatuażu: pierwsze 24 godziny, codzienna pielęgnacja, czego unikać i długoterminowa ochrona tatuażu.',
        },
    },
    contacts: {
        en: {
            title: 'Book a Tattoo Session in Warsaw',
            description:
                'Book your tattoo session with Anastasiya Cherepanova in Warsaw. Send your idea, references, and preferred dates — reply within 24–48h.',
        },
        pl: {
            title: 'Rezerwacja Sesji Tatuażu w Warszawie',
            description:
                'Zarezerwuj sesję tatuażu z Anastasiyą Cherepanovą w Warszawie. Wyślij swój pomysł, referencje i preferowane daty — odpiszę w ciągu 24–48h.',
        },
    },
} as const;

export type SocialData = {
    label: string;
    icon: IconName;
    link: string;
    userName?: string;
    external?: boolean;
};

export const socialData: Record<string, SocialData> = {
    email: {
        label: 'Email',
        icon: 'mail',
        // link: 'mailto:cherepanova.tattoo@gmail.com',
        link: 'mailto:cherepanova.tattoo@gmail.com?subject=Tattoo%20Appointment&body=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment!',
        userName: 'cherepanova.tattoo@gmail.com',
    },
    instagram: {
        label: 'Instagram',
        icon: 'brand-instagram',
        link: 'https://www.instagram.com/cherepanova.tattoo',
        userName: '@cherepanova.tattoo',
        external: true,
    },
    facebook: {
        label: 'Facebook',
        icon: 'brand-facebook',
        link: 'https://facebook.com/anastasya.cherepanova.3/',
        userName: 'Anastasiya Cherepanova',
        external: true,
    },
};

export const socialLinks: Array<SocialData> = Object.keys(socialData).map((key) => socialData[key]);
