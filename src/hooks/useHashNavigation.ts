'use client';

import { useCallback, type MouseEvent } from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';

export const useHashNavigation = () => {
    const pathname = usePathname();
    const router = useRouter();

    return useCallback((e: MouseEvent<HTMLAnchorElement>, href: string) => {
        if (!href.includes('#')) return;

        e.preventDefault();

        const [,id] = href.split('#');

        if (pathname === '/') {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(href);
        }
    }, [pathname, router]);
};
