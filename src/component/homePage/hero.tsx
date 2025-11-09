export const HomeHero = () => {
  return (
    <div className="min-h-screen bg-[#F8F5F0] flex items-center justify-center font-sans relative overflow-hidden">
      <div className="w-full max-w-7xl px-8 py-16 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8">
        {/* Left Side - Mandala with Logo */}
        <img
          src="/logo.jpg"
          alt="Mandala with Logo"
          className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
        />

        {/* Right Side - Text Content */}
        <div className="lg:w-1/2 lg:pl-8 flex flex-col">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[#2C3E50] island-moments mb-6 italic leading-tight">
            Varnan is where stories find
            <br />
            <span className="text-4xl lg:text-5xl xl:text-6xl block pl-4">
              their voice and form
            </span>
          </h1>

          <div className="mb-8">
            <span className="text-[#D9794B] text-lg lg:text-xl font-medium tracking-wider">
              Films . Brands . Art
            </span>
          </div>

          <p className="text-gray-800 text-base lg:text-lg leading-relaxed max-w-xl halant">
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
