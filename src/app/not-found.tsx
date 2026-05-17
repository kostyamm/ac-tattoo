import './globals.css';
import Link from 'next/link';
import { Nunito, Montserrat } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { defaultLocale } from '@/i18n/config';
import { cn } from '@/lib/utils';
import { appMeta } from '@/lib/appMeta';

const nunito = Nunito({ subsets: ['latin'], variable: '--font-sans' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-display' });

export default function NotFound() {
    return (
        <html lang="en" className={cn('dark', nunito.variable, montserrat.variable)} suppressHydrationWarning>
        <body className="font-sans bg-background text-foreground">
        <div
            className="min-h-svh flex flex-col items-center justify-center px-6 text-center"
        >
            <p
                className="font-display font-bold text-[clamp(140px,22vw,280px)] leading-none text-foreground/5.5 select-none pointer-events-none"
            >
                404
            </p>

            <div className="-mt-[3vw]">
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                    Page not found
                </h1>

                <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed max-w-[34ch] mx-auto">
                    Looks like this page got lost in the ink.
                    <br />
                    Let&apos;s get you back to the studio.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button asChild size="lg" className="rounded-full px-8">
                        <Link href={`/${defaultLocale}`}>Back to home</Link>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                        <Link href={`/${defaultLocale}/#contacts`}>Book a session</Link>
                    </Button>
                </div>
            </div>

            <p className="mt-16 text-xs tracking-[0.22em] text-muted-foreground/60 uppercase">
                {appMeta.brandName}
            </p>
        </div>
        </body>
        </html>
    );
}
