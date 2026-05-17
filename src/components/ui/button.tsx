import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    [
        // base
        "inline-flex items-center justify-center whitespace-nowrap select-none cursor-pointer",
        "text-sm font-medium",
        "transition-[transform,opacity,background-color,border-color,color] duration-200",
        "disabled:pointer-events-none disabled:opacity-50",
        "outline-none",
        // premium shape
        "rounded-full",
        // subtle focus (fashion)
        "focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-0",
        // icons
        "[&_svg]:pointer-events-none [&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",
    ].join(" "),
    {
        variants: {
            variant: {
                // Primary: clean, almost print-like
                default:
                    "bg-primary text-primary-foreground border border-transparent hover:opacity-90",

                // Outline: thin and calm
                outline:
                    "bg-transparent text-foreground border border-border/70 hover:border-border hover:bg-secondary/10",

                // Secondary: low contrast fill
                secondary:
                    "bg-secondary/20 text-foreground border border-border/60 hover:bg-secondary/30 hover:border-border",

                // Ghost: for inline actions
                ghost: "bg-transparent text-foreground hover:bg-secondary/10",

                // Destructive (rare for landing)
                destructive:
                    "bg-destructive text-destructive-foreground border border-transparent hover:opacity-90",

                // Link
                link: "bg-transparent text-foreground underline underline-offset-4 hover:opacity-80",
            },
            size: {
                default: "h-10 px-5 gap-2",
                sm: "h-9 px-4 gap-2",
                lg: "h-11 px-6 gap-2 text-[15px]",
                icon: "size-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
    const Comp = asChild ? Slot : "button";

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    );
}

export { Button, buttonVariants };