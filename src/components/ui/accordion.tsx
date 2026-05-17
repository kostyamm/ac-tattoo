"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/lib/utils";

function Accordion({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return (
        <AccordionPrimitive.Root
            data-slot="accordion"
            className={cn("w-full", className)}
            {...props}
        />
    );
}

function AccordionItem({
    className,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("border-t border-border/70", className)}
            {...props}
        />
    );
}

function AccordionTrigger({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    [
                        "group flex flex-1 items-center justify-between gap-6 cursor-pointer",
                        "py-6 px-3 md:px-6 text-left",
                        "text-base md:text-lg font-medium tracking-tight",
                        "outline-none",
                        "transition-opacity hover:opacity-80",
                        "focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-0",
                    ].join(" "),
                    className
                )}
                {...props}
            >
                {children}

                <span
                    aria-hidden="true"
                    className="text-lg text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-45"
                >
          +
        </span>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
}

function AccordionContent({
    className,
    children,
    ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className={cn(
                "overflow-hidden",
                "data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
            )}
            {...props}
        >
            <div
                className={cn(
                    "pb-6 px-3 md:px-6 text-sm md:text-base text-muted-foreground leading-relaxed",
                    "[&_p:not(:last-child)]:mb-4",
                    "[&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:opacity-80",
                    className
                )}
            >
                {children}
            </div>
        </AccordionPrimitive.Content>
    );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };