'use client';

import { useState, type FC } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useHashNavigation } from '@/hooks';
import { Divider } from '@/components/common/Divider';
import { SocialLinks } from '@/components/common/SocialLinks';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
} from '@/components/ui/sheet';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

type NavLink = { href: string; label: string };
type HeaderMenuProps = { links: readonly NavLink[]; triggerClassName?: string };

export const HeaderMenu: FC<HeaderMenuProps> = ({ links, triggerClassName }) => {
    const [open, setOpen] = useState(false);
    const t = useTranslations('nav');
    const handleHashClick = useHashNavigation();

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        handleHashClick(e, href);
        setOpen(false);
    };

    return (
        <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                    <Button variant="outline" size="icon" aria-label={t('menu')} className={cn('rounded-full', triggerClassName)}>
                        <Icon icon="menu-2" className="size-4" />
                    </Button>
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className={cn(
                        'px-6 pt-6 pb-6',
                        'h-[100dvh] flex flex-col',
                        'overflow-y-auto overscroll-contain',
                    )}
                >
                    <SheetHeader className="p-0">
                        <SheetTitle className="text-xs uppercase tracking-[0.22em]">
                            {t('menu')}
                        </SheetTitle>
                        <SheetDescription className="hidden" />
                    </SheetHeader>

                    <div className="mt-10">
                        <div className="grid">
                            {links.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="py-3 text-lg uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
                                    onClick={(e) => handleLinkClick(e, href)}
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <Button asChild size="lg" className="mt-8 w-full rounded-full uppercase tracking-[0.14em]">
                        <Link href="/#contacts" aria-label={t('book')} onClick={(e) => handleLinkClick(e, '/#contacts')}>{t('book')}</Link>
                    </Button>

                    <div className="mt-auto flex flex-col gap-4">
                        <SocialLinks />

                        <Divider className="w-full" />

                        <p className="text-xs text-muted-foreground">
                            {t('preferDm')}
                        </p>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};
