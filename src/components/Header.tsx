'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { useHashNavigation } from '@/hooks';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { HeaderMenu } from '@/components/HeaderMenu';

const SCROLL_THRESHOLD = 64;

export const Header = () => {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const handleHashClick = useHashNavigation();
    const [isScrolled, setIsScrolled] = useState(false);

    const isOnHero = !isScrolled && pathname === '/';

    const navLinks = [
        { href: '/#works', label: t('works') },
        { href: '/#process', label: t('process') },
        { href: '/aftercare', label: t('aftercare') },
    ] as const;

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            aria-label="Header"
            className={cn(
                'header-block fixed inset-x-0 top-0 z-50',
                'transition-colors duration-300 ease-out',
                isOnHero
                    ? 'bg-transparent border-b border-transparent text-white'
                    : 'bg-background/80 backdrop-blur-md border-b border-border/70',
            )}
        >
            <div className="container-page flex h-full items-center justify-between">
                <Link href="/" aria-label="Home" className="shrink-0">
                    <div className="font-display leading-none tracking-wide font-semibold">
                        <div className="text-xl md:text-4xl">Cherepanova</div>
                        <div
                            className={cn(
                                'mt-1 text-xs md:text-sm uppercase tracking-[0.35em]',
                                'transition-colors duration-300 ease-out',
                                isOnHero ? 'text-white/70' : 'text-foreground/70',
                            )}
                        >
                            Tattoo
                        </div>
                    </div>
                </Link>

                <nav
                    aria-label="Navigation"
                    className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.22em]"
                >
                    {navLinks.map(({ href, label }, index) => (
                        <Link
                            key={index}
                            href={href}
                            aria-label={label}
                            className="transition-opacity hover:opacity-60"
                            onClick={(e) => handleHashClick(e, href)}
                        >{label}</Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Button
                        asChild
                        size="sm"
                        variant={isOnHero ? 'outline' : 'default'}
                        className={cn(
                            'uppercase tracking-[0.14em] rounded-full px-4 md:px-6',
                            isOnHero && 'border-white/45 text-white hover:bg-white/10 hover:text-white',
                        )}
                    >
                        <Link href="/#contacts" aria-label={t('book')} onClick={(e) => handleHashClick(e, '/#contacts')}>{t('book')}</Link>
                    </Button>

                    <HeaderMenu
                        links={navLinks}
                        triggerClassName={cn(isOnHero && 'border-white/45 text-white hover:bg-white/10')}
                    />
                </div>
            </div>
        </header>
    );
};
