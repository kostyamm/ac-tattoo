import { cn } from '@/lib/utils';

export type IconName =
    | 'brand-facebook'
    | 'brand-instagram'
    | 'check'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up'
    | 'clock'
    | 'heart-handshake'
    | 'mail'
    | 'menu-2'
    | 'moon'
    | 'pencil'
    | 'shield'
    | 'sparkles'
    | 'sun'
    | 'world'
    | 'x';

type IconProps = {
    icon: IconName;
    size?: number;
    className?: string;
};

export const Icon = ({ icon, size, className }: IconProps) => (
    <span
        aria-hidden="true"
        className={cn(
            'inline-block shrink-0 bg-current',
            size === undefined && 'size-6',
            className,
        )}
        style={{
            ...(size !== undefined ? { width: size, height: size } : {}),
            maskImage: `url('/icons/${icon}.svg')`,
            WebkitMaskImage: `url('/icons/${icon}.svg')`,
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
        }}
    />
);
