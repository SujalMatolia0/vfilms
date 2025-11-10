import { ChevronLeft, ChevronRight, PlayIcon } from 'lucide-react';
import { useState } from 'react';

export default function PortfolioHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    {
      id: 1,
      thumbnail: '/thumbnail1.jpg',
    },
    {
      id: 2,
      thumbnail: '/thumbnail2.jpg',
    },
    {
      id: 3,
      thumbnail: '/thumbnail1.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col ">
      <div className="relative z-10 px-4 sm:px-6 md:px-12 py-8 md:py-16 flex-1 flex flex-col items-center justify-center">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#2C3E50] mb-2">
            The Highlight Reel
          </h1>
          <p className="text-sm sm:text-base text-[#2C3E50]">
            Watch the magic we've captured.
          </p>
        </div>

        <div className="relative w-full max-w-4xl px-8 sm:px-12 md:px-16 lg:px-0">
          <div className="relative w-full aspect-video shadow-2xl rounded-lg overflow-hidden">
            <div className="absolute inset-0 w-full h-full  pointer-events-none">
              <img
                src="/Frame.jpg"
                alt="Film frame"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative w-full h-full z-10 flex items-center justify-center">
              <div className="relative w-[88%] h-[78%] mx-auto my-auto">
                <img
                  src={videos[currentSlide].thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover rounded-sm shadow-2xl transition-opacity duration-300"
                  style={{
                    objectPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-sm">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-all hover:scale-110 shadow-2xl border-4 border-white/30">
                    <PlayIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 text-[#2C3E50]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-[-60px] top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#2C3E50]" />
          </button>
        </div>

        <div className="flex gap-2 sm:gap-3 mt-6 sm:mt-8">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 rounded-full transition-colors ${
                currentSlide === index ? 'bg-[#E57352]' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 w-20 h-32 sm:w-24 sm:h-40 md:w-32 md:h-48 z-0 pointer-events-none opacity-70">
        <img src="/Camera.jpg" alt="img" />
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 md:bottom-12 md:right-12 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 z-0 pointer-events-none opacity-60">
        <img src="/ProtfolioVector1.jpg" alt="image" />
      </div>
    </div>
  );
}
