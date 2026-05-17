import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionVariant = "none" | "base" | "spacious" | "cinematic";

type SectionProps = {
    id?: string;
    title?: string;
    subtitle?: string;
    centered?: boolean;
    variant?: SectionVariant;
    children: ReactNode;
    className?: string;
};

const variantStyles: Record<SectionVariant, string> = {
    none: "pt-0 pb-16 md:pb-20 lg:pb-24",
    base: "py-16 md:py-20 lg:py-24",
    spacious: "py-20 md:py-28 lg:py-32",
    cinematic: "py-28 md:py-36 lg:py-44",
};

export const Section = ({
    id,
    title,
    subtitle,
    centered,
    variant = "base",
    children,
    className,
}: SectionProps) => {
    const hasHeader = Boolean(title || subtitle);

    return (
        <section
            id={id}
            data-section
            className={cn(
                "scroll-mt-20 md:scroll-mt-24",
                variantStyles[variant],
                className
            )}
        >
            <div className="container-page">
                {hasHeader && (
                    <div
                        className={cn(
                            "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
                            centered && "md:flex-col md:items-center md:text-center"
                        )}
                    >
                        <div className={cn(centered && "max-w-3xl")}>
                            {title && (
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.05]">
                                    {title}
                                </h2>
                            )}

                            {subtitle && (
                                <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                )}

                <div
                    className={cn(
                        hasHeader && "mt-16 md:mt-20",
                        centered && "mx-auto max-w-3xl"
                    )}
                >
                    {children}
                </div>
            </div>
        </section>
    );
};