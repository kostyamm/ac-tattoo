'use client';

import { useTranslations } from 'next-intl';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';

const FAQ_INDICES = [0, 1, 2, 3, 4, 5, 6] as const;

export const Faq = () => {
    const t = useTranslations('faq');

    return (
        <Accordion type="single" collapsible>
            {FAQ_INDICES.map((i) => (
                <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-t border-border/70"
                >
                    <AccordionTrigger
                        className="py-6 text-left text-base md:text-lg font-medium tracking-tight hover:no-underline">
                        {t(`${i}.question`)}
                    </AccordionTrigger>

                    <AccordionContent className="pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">
                        <div dangerouslySetInnerHTML={{ __html: t(`${i}.answer`) }} />
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
