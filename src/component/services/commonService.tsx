import React from 'react';

export interface BrandingHeroProps {
  heroQuote: string;
  heroQuoteAuthor: string;
  brushStrokeImageUrl: string;

  tagBackgroundColor?: string;
  tagTextColor?: string;

  mainHeading: string;
  mainDescription: string;
  companyName: string;

  services: Array<{
    id: string;
    title: string;
  }>;

  ctaButtonText: string;
  ctaArrowImageUrl?: string;

  decorativeIcons: {
    topLeft?: string;
    topRight?: string;
    bottomLeft?: string;
    bottomRight?: string;
  };

  mainImageUrl: string;
  mainImageAltText: string;
  mainImageCaption?: string;

  servicesIconUrl?: string;
}

export const BrandingHero: React.FC<BrandingHeroProps> = ({
  heroQuote,
  heroQuoteAuthor,
  brushStrokeImageUrl,
  tagBackgroundColor = '#FFF5F0',
  tagTextColor = '#8B3E2E',
  mainHeading,
  mainDescription,
  companyName,
  services,
  ctaButtonText,
  ctaArrowImageUrl,
  decorativeIcons,
  mainImageUrl,
  mainImageAltText,
  mainImageCaption,
}) => {
  return (
    <div
      className="min-h-screen w-full relative overflow-hidden"
      style={{ backgroundColor: '#FFF5F0' }}
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
          backgroundSize: '15px 15px',
        }}
      />

      <div className="text-center px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 relative z-10">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl halant text-[#2C3E50] max-w-3xl mx-auto relative z-10 font-normal leading-relaxed px-2 sm:px-0">
          "{heroQuote}"{' '}
          <span className="halant not-italic text-[#2C3E50]">
            – {heroQuoteAuthor}
          </span>
        </p>
        {brushStrokeImageUrl && (
          <img
            src={brushStrokeImageUrl}
            alt=""
            className="absolute top-16 sm:top-20 md:top-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-xl sm:max-w-2xl md:max-w-3xl pointer-events-none z-0 opacity-90"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-6 md:py-8 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start w-full relative">
          <div className="absolute -top-12 sm:-top-14 md:-top-16 left-0 md:left-4 lg:left-8 z-10">
            <button
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium border transition-colors hover:opacity-80"
              style={{
                backgroundColor: tagBackgroundColor,
                color: tagTextColor,
                borderColor: tagTextColor,
              }}
            >
              <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span>Back</span>
            </button>
          </div>

          {decorativeIcons.bottomLeft && (
            <img
              src={decorativeIcons.bottomLeft}
              alt=""
              className="absolute -bottom-8 sm:-bottom-12 md:-bottom-16 left-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 z-0 opacity-80"
              aria-hidden="true"
            />
          )}

          <div className="relative flex justify-center md:justify-end md:pr-8 lg:pr-12 xl:pr-16 pt-8 md:pt-0">
            <div className="bg-white rounded-lg sm:rounded-xl overflow-hidden relative border-2 sm:border-4 border-white shadow-lg sm:shadow-xl w-full max-w-[240px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[360px]">
              <img
                src={mainImageUrl}
                alt={mainImageAltText}
                className="w-full h-auto object-cover"
              />
              {mainImageCaption && (
                <div className="absolute bottom-0 left-0 right-0 bg-white py-2 sm:py-3 text-center border-t border-gray-200">
                  <p className="text-xs sm:text-sm font-semibold text-[#2C3E50] instrument-sans">
                    {mainImageCaption}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="relative md:pl-6 lg:pl-8 xl:pl-12 2xl:pl-16 pt-6 sm:pt-8 md:pt-0">
            {decorativeIcons.topRight && (
              <img
                src={decorativeIcons.topRight}
                alt=""
                className="absolute top-0 -right-8 sm:-right-12 md:-right-16 lg:right-15 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 z-0 hidden md:block"
                aria-hidden="true"
              />
            )}
            {decorativeIcons.topLeft && (
              <img
                src={decorativeIcons.topLeft}
                alt=""
                className="absolute top-1/3 sm:top-1/2 -right-8 sm:-right-12 md:-right-16 lg:right-35 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 z-0 hidden md:block"
                aria-hidden="true"
              />
            )}

            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-[#2C3E50]">
              <div className="relative">
                <h1 className="text-sm sm:text-base md:text-lg leading-relaxed font-normal instrument-sans">
                  {mainHeading}
                </h1>
              </div>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal instrument-sans">
                {mainDescription}
              </p>

              <div>
                <p className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm md:text-base instrument-sans">
                  {companyName} creates:
                </p>

                <ul className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
                  {services.map((service) => (
                    <li
                      key={service.id}
                      className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm md:text-base"
                    >
                      <span className="text-[#D9794B] mt-0.5 font-bold text-base sm:text-lg">
                        •
                      </span>
                      <span className="font-normal instrument-sans">
                        {service.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 sm:pt-3 md:pt-4">
                <div className="flex flex-col items-start">
                  <button
                    className="inline-block text-[#2C3E50] font-semibold text-xs sm:text-sm md:text-base hover:opacity-80 transition-opacity instrument-sans"
                    aria-label={ctaButtonText}
                  >
                    {ctaButtonText}
                  </button>

                  <div className="mt-2">
                    <img
                      src={ctaArrowImageUrl}
                      alt=""
                      className="w-12 sm:w-16 md:w-20 h-auto opacity-90"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            {decorativeIcons.bottomRight && (
              <img
                src={decorativeIcons.bottomRight}
                alt=""
                className="absolute bottom-0 sm:bottom-1/4 -right-8 sm:-right-12 md:-right-16 lg:-right-20 xl:right-5 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 z-0 hidden md:block"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
