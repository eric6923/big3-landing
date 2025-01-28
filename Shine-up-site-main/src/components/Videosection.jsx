const Videosection = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <video
        src="https://res.cloudinary.com/dwlukj2fe/video/upload/v1731065583/wr1iujbrmwlusfdxexaw.webm"
        type="video/webm"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover -mt-10 md:h-[80vh]"
        style={{ height: "100vh" }}
        onContextMenu={handleContextMenu}
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      
      {/* Text content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-200 text-xs sm:text-sm md:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-6 font-light animate-fadeIn">
            Welcome to the Future of Filmmaking
          </p>
          <h1 className="hero-title font-bold text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.2] sm:leading-tight tracking-tight mb-4 sm:mb-8 px-2">
            The only Video & Film Production House in India you'll need
          </h1>
          <div className="w-16 sm:w-24 h-[1px] sm:h-[2px] bg-white/30 mx-auto mb-4 sm:mb-8 animate-fadeIn" />
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-lg md:max-w-2xl mx-auto font-light leading-relaxed animate-fadeIn">
            Creating cinematic excellence through innovation and storytelling
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videosection