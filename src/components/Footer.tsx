'use client';

import { useTranslations } from 'next-intl';
import { appMeta, socialLinks } from '@/lib/appMeta';
import { ThemeToggle } from '@/components/ThemeToggle';
import { LocaleSelect } from '@/components/LocaleSelect';
import { Icon } from '@/components/Icon';
import { Link } from '@/i18n/navigation';

export const Footer = () => {
    const t = useTranslations('footer');

    const links = [
        { href: '/contacts', label: t('contacts') },
        { href: '/aftercare', label: t('aftercare') },
    ];

    return (
        <footer className="border-t border-border/70">
            <div className="container-page py-24 md:py-28">
                <div className="grid gap-16 md:grid-cols-3">
                    <div className="font-display font-semibold text-4xl leading-none">
                        Cherepanova <br /> Tattoo
                    </div>

                    <nav
                        className="flex flex-col gap-5 text-xs uppercase tracking-[0.22em] text-muted-foreground"
                        aria-label="Footer"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                aria-label={link.label}
                                className="transition-colors hover:text-foreground"
                            >{link.label}</Link>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-5 text-sm">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.link}
                                href={link.link}
                                target={link.external ? '_blank' : undefined}
                                rel={link.external ? 'noopener noreferrer' : undefined}
                                aria-label={link.label}
                                className="flex w-full items-center gap-2 transition-colors hover:text-foreground"
                            >
                                <Icon icon={link.icon} className="size-5 shrink-0 text-foreground" />
                                {link.label}</Link>
                        ))}
                    </div>
                </div>

                <div className="mt-20 border-t border-border/50 pt-8 text-xs text-muted-foreground">
                    <div className="flex gap-4 justify-between items-center">
                        <p>© {new Date().getFullYear()} {appMeta.brandName}</p>
                        <div className="flex items-center gap-3">
                            <LocaleSelect />
                            <ThemeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
