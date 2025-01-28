
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Delivering Creative Video Editing, <br></br>
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Smart SEO for Brands
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Transform your vision into reality at ShineUp with our innovative video editing, strategic web development, and cutting-edge design solutions.
      Let’s create something extraordinary together!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="mailto:digitalshineup@gmail.com"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Contact Us
        </a>
        {/*
          <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
          </a>
          */}
      </div>
      
    </div>
  );
};

export default HeroSection;
