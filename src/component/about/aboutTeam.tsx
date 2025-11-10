'use client';

export default function OurStoryAboutTeam() {
  return (
    <>
      <main className="min-h-screen relative overflow-hidden ">
        <div className="relative px-4 md:px-12 pt-12 md:pt-20 pb-12 z-10 flex flex-col items-center">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start max-w-6xl mx-auto">
            <div className="relative min-h-[400px] md:min-h-[450px] flex items-start justify-center lg:justify-start pt-8 lg:pt-0">
              <div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 transform rotate-[3deg] mt-8 lg:mt-0
               lg:absolute lg:top-8 lg:left-0"
                style={{
                  backgroundImage: `url("/StickyNote.jpg")`,
                  backgroundPosition: 'center',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <img
                  src="/Pin.jpg"
                  alt="Pin on sticky note"
                  className="absolute -top-8 right-8 w-16 h-20 md:w-20 md:h-24"
                />

                <div className="p-5 md:p-6 h-full flex items-center">
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#2C3E50] leading-relaxed font-serif">
                    Some craft films. Some build brands. Some curate art. We
                    bring it all together - a collective of storytellers driven
                    by one belief: every project deserves to be more than just a
                    message; it should become a masterpiece. From first spark to
                    final frame, from raw ideas to timeless visuals - we shape
                    stories that stay with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative p-4 md:p-8 mt-0 lg:mt-16">
              <div className="flex justify-center mb-4 pointer-events-none">
                <img
                  src="/PeoplesGroup.jpg"
                  alt="Team members silhouettes"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
                />
              </div>

              <div className="hidden md:block absolute inset-0 pointer-events-none">
                <svg width="0" height="0">
                  <defs>
                    <marker
                      id="arrowhead"
                      markerWidth="10"
                      markerHeight="7"
                      refX="0"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#2C3E50" />
                    </marker>
                  </defs>
                </svg>

                <div className="absolute top-4 left-8 md:left-12 lg:left-16">
                  <p className="text-xs md:text-sm text-[#2C3E50] font-serif mb-1 whitespace-nowrap italic">
                    Film Makers
                  </p>
                  <svg
                    className="w-20 h-16 md:w-24 md:h-20"
                    viewBox="0 0 100 80"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 10 0 Q 30 20 40 60"
                      stroke="#2C3E50"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                </div>

                <div className="absolute top-4 right-8 md:right-12 lg:right-16">
                  <p className="text-xs md:text-sm text-[#2C3E50] font-serif mb-1 text-right whitespace-nowrap italic">
                    Art Curators
                  </p>
                  <svg
                    className="w-20 h-16 md:w-24 md:h-20 ml-auto"
                    viewBox="0 0 100 80"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 90 0 Q 70 20 60 60"
                      stroke="#2C3E50"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-8 left-0 md:left-4 lg:left-8">
                  <svg
                    className="w-24 h-20 md:w-32 md:h-24"
                    viewBox="0 0 100 80"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 20 70 Q 40 40 60 10"
                      stroke="#2C3E50"
                      strokeWidth="1"
                      fill="none"
                      strokeLinecap="round"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                  <p className="text-xs md:text-sm text-[#2C3E50] font-serif whitespace-nowrap italic ml-2">
                    Branding Experts
                  </p>
                </div>
              </div>

              <div className="flex md:hidden justify-center gap-4 mt-4 flex-wrap">
                <span className="text-xs italic text-[#2C3E50] font-serif">
                  Film Makers
                </span>
                <span className="text-xs italic text-[#2C3E50] font-serif">
                  Art Curators
                </span>
                <span className="text-xs italic text-[#2C3E50] font-serif">
                  Branding Experts
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 md:mt-20 lg:mt-24">
            <p className="text-sm md:text-base lg:text-lg text-[#2C3E50] font-serif mb-6 max-w-2xl mx-auto">
              Take a closer look at the stories V bring to life.
            </p>
            <button className="bg-[#E57352] hover:bg-[#d15a38] text-white px-8 md:px-10 py-2 md:py-2.5 rounded-full font-medium transition-colors duration-200 text-sm md:text-base shadow-md">
              View Portfolio
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-56 lg:w-64 h-32 sm:h-40 md:h-56 lg:h-64 opacity-90 pointer-events-none z-0">
          <img
            src="/IndiaGate.jpg"
            alt="India Gate illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </main>
    </>
  );
}
