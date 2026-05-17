'use client';

import type { FC } from 'react';
import { useTheme } from 'next-themes';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ThemeToggleProps = { className?: string };

export const ThemeToggle: FC<ThemeToggleProps> = ({ className }) => {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <Button
            variant="outline"
            size="icon"
            className={cn('rounded-full', className)}
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        >
            <Icon icon="sun" className="size-4 dark:hidden" />
            <Icon icon="moon" className="size-4 hidden dark:block" />
        </Button>
    );
};
