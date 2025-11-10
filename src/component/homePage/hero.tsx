export const HomeHero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center font-sans relative overflow-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12">
       
        <div className="w-full lg:w-1/2 flex justify-center items-center relative">
         
          <div className="absolute inset-0 lg:hidden z-[-1] flex items-center justify-center pointer-events-none">
            <div
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-center bg-no-repeat bg-contain opacity-20"
              style={{ backgroundImage: "url('/logo.jpg')" }}
            />
          </div>

       
          <img
            src="/logo.jpg"
            alt="Mandala with Logo"
            className="hidden lg:block w-56 h-56 md:w-64 md:h-64 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 object-contain"
          />
        </div>

      
        <div className="w-full lg:w-1/2 text-center items-center lg:text-left lg:pl-6 xl:pl-8 flex flex-col relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl island-moments text-center lg:text-left font-bold text-[#2C3E50] mb-3 sm:mb-4 md:mb-6 italic leading-tight">
            Varnan is where stories find
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl block mt-1 sm:mt-2 lg:pl-4">
              their voice and form
            </span>
          </h1>

          <div className="mb-4 sm:mb-6 md:mb-8">
            <span className="text-[#D9794B] text-center halant text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wider">
              Films . Brands . Art
            </span>
          </div>

          <p className="text-gray-800 text-center lg:text-left instrument-sans text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
            Since 2009, We've been telling stories - stories of people, their
            journeys, and the places that shape them. Some begin in polished
            boardrooms, others in humble village squares. But every story starts
            the same way - by listening with intention. We believe it takes
            trust, patience, and an eye for the unseen to capture what truly
            matters. We don't just tell stories - We honor them.
          </p>
        </div>
      </div>
    </div>
  );
};
