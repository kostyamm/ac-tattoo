import { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Icon, type IconName } from '@/components/Icon';

type SectionItemProps = {
    title?: ReactNode;
    icon?: IconName;
    meta?: string;
    content?: string;
    className?: string;
};


export const SectionItem = ({
    title,
    icon,
    meta,
    content,
    className,
}: SectionItemProps) => {
    const hasHeader = Boolean(title || icon || meta);

    return (
        <article className={cn("border-t border-border/70 pt-8", className)}>
            {hasHeader && (
                <div className="flex items-baseline justify-between gap-6">
                    <div className="flex items-baseline gap-4">
                        {icon && (
                            <Icon icon={icon} className="size-4 text-muted-foreground shrink-0 mt-[2px]" />
                        )}
                        {title && (
                            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                                {title}
                            </h3>
                        )}
                    </div>

                    
                    {meta && (
                        <span className="text-xs tracking-[0.22em] text-muted-foreground">
                            {meta}
                        </span>
                    )}
                </div>
            )}

            {content && (
                <div
                    className="mt-5 text-sm md:text-base text-muted-foreground max-w-prose"
                    dangerouslySetInnerHTML={{ __html: content }}
                >
                </div>
            )}
        </article>
    );
};