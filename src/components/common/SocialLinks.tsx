import { socialLinks } from '@/lib/appMeta';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Icon } from '@/components/Icon';

type SocialLinksProps = {
    label?: string;
    className?: string;
};

export const SocialLinks = ({ label, className }: SocialLinksProps) => (
    <div className={cn('overflow-hidden', className)}>
        {label && (
            <p className="text-xs tracking-[0.22em] text-muted-foreground">{label}</p>
        )}
        <div className={cn(label && 'mt-6')}>
            {socialLinks.map((link, index) => (
                <Link
                    key={link.link}
                    href={link.link}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className={cn(
                        'flex w-full items-center gap-2 py-4',
                        'transition-opacity hover:opacity-60',
                        index !== 0 && 'border-t border-border/70',
                    )}
                >
                    <Icon icon={link.icon} className="size-5 shrink-0 text-foreground" />
                    {link.userName && (
                        <span className="min-w-0 flex-1 truncate text-xs tracking-[0.14em] text-muted-foreground">
                            {link.userName}
                        </span>
                    )}
                </Link>
            ))}
        </div>
    </div>
);
