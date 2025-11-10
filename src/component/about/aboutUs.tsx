export default function AboutUs() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col ">
      <div className="relative z-10 px-4 sm:px-6 md:px-12 py-8 md:py-12 flex-1">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6 md:space-y-8">
            <h1 className="text-md items-center sm:text-xl md:text-xl lg:text-xl xl:text-xl halant text-[#2C3E50] text-center leading-tight font-normal">
              A montage of familiar faces and names.
            </h1>

            <p className="text-[#2C3E50] text-xs sm:text-sm md:text-base leading-relaxed instrument-sans text-center max-w-md mx-auto">
              Some stories come from the biggest names. Others begin with bold,
              rising voices. We've been fortunate to walk alongside both -
              listening, creating, and building stories that matter.
            </p>

            <div className="relative mx-auto lg:mx-0 h-32 sm:h-40 md:h-48 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] mt-4 md:mt-8">
              {[
                { count: '85+', label: 'Projects' },
                { count: '50+', label: 'Happy Clients' },
                { count: '10+', label: 'Experts Team' },
              ].map((item, index) => {
                const rotations = [
                  'rotate-[3deg]',
                  'rotate-[-2deg]',
                  'rotate-[1deg]',
                ];
                const positions = [
                  'left-0 top-4',
                  'left-[35%] sm:left-[38%] top-0',
                  'left-[70%] sm:left-[72%] top-4',
                ];
                const zIndexClass = ['z-10', 'z-20', 'z-30'][index];

                return (
                  <div
                    key={index}
                    className={`absolute ${positions[index]} w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 p-2 sm:p-3 md:p-4 transform ${rotations[index]} shadow-lg flex flex-col justify-center items-center ${zIndexClass} bg-[#FFFACD]`}
                    style={{
                      borderRadius: '2px',
                    }}
                  >
                    <div className="text-center">
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C5F8D] leading-none">
                        {item.count}
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-[#E57352] mt-1 md:mt-2 font-medium">
                        {item.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex flex-col justify-center pt-8 lg:pt-0">
            <div className="mb-8 md:mb-12 text-center lg:text-right px-4 lg:px-0">
              <p
                className="text-center island-moments text-[#2C3E50] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed"
                style={{ fontStyle: 'italic' }}
              >
                Every project is more than just a brief - it's a new chapter
                waiting to be written. Together, we've crafted tales that
                inspire, connect, and endure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 max-w-2xl z-0 pointer-events-none opacity-90">
        <img
          src="/Ted-Image.jpg"
          alt="Mountain landscape with sun"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
