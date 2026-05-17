import { cn } from '@/lib/utils';

type DividerProps = { className?: string };

export const Divider = ({ className }: DividerProps) => (
    <div className={cn('h-px w-12 bg-border/70', className)} />
);
