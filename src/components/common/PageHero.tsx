type PageHeroProps = {
    title: string;
    subtitle?: string;
};

export const PageHero = ({ title, subtitle }: PageHeroProps) => {
    return (
        <section className="page-hero-section">
            <div className="container-page relative z-10 py-12 md:py-16 lg:py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-foreground">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="mt-5 md:mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};