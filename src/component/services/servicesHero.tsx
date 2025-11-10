'use client';

import {
  artCurationData,
  brandingAgencyData,
  filmProductionData,
} from '../../assets/data';
import { BrandingHero } from './commonService';

const craftItems = [
  {
    id: 1,
    title: 'Film Production',
    imageUrl: '/Frame 17.jpg',
    rotation: '-rotate-6',
  },
  {
    id: 2,
    title: 'Branding',
    imageUrl: '/Frame 17-1.jpg',
    rotation: 'rotate-2',
  },
  {
    id: 3,
    title: 'Art Curation',
    imageUrl: '/Frame 17-2.jpg',
    rotation: '-rotate-6',
  },
];

export default function ServiceHero() {
  return (
    <>
      <div className="min-h-screen  relative overflow-hidden flex flex-col">
        <main className="relative z-10 px-4 sm:px-6 md:px-12 py-12 md:py-16 flex-1 flex flex-col justify-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="relative text-center mb-16 md:mb-20">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#2C3E50] leading-tight font-normal mb-2">
                The storyboard reveals the breadth of our craft.
              </h1>

              <div className="relative inline-block">
                <img
                  src="/Stroke.jpg"
                  alt=""
                  className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto opacity-90"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20 max-w-5xl mx-auto">
              {craftItems.map((item) => (
                <div
                  key={item.id}
                  className={`relative transform ${item.rotation}`}
                >
                  <img
                    src="/Tape.jpg"
                    alt="decorative tape"
                    className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 sm:w-24 md:w-28 h-auto z-10"
                  />

                  <div className="bg-white p-3 sm:p-4 pb-10 sm:pb-12 shadow-2xl">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-auto object-cover aspect-[3/4]"
                    />
                    <p className="text-center text-sm sm:text-base md:text-lg text-[#2C3E50] mt-3 sm:mt-4 font-normal">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 z-0">
          <img
            src="/Border.jpg"
            alt="Decorative border"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <BrandingHero {...filmProductionData} />
      <BrandingHero {...artCurationData} />
      <BrandingHero {...brandingAgencyData} />
    </>
  );
}
