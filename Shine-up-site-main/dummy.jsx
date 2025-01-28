<a href="#" className="py-2 px-3 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>




            import { useState } from "react";
            import accscartImage from "../assets/portfolioimgs/accscart.webp";
            
            const portfolioItems = [
              { id: 1, category: "graphic design", image: accscartImage },
              { id: 2, category: "graphic design", image: accscartImage },
              { id: 3, category: "graphic design", image: accscartImage },
              { id: 4, category: "graphic design", image: accscartImage },
              { id: 5, category: "3d modelling", image: accscartImage },
              { id: 6, category: "3d modelling", image: accscartImage },
              { id: 7, category: "3d modelling", image: accscartImage },
              { id: 8, category: "3d modelling", image: accscartImage },
              { id: 9, category: "video editing", image: accscartImage },
              { id: 10, category: "video editing", image: accscartImage },
              { id: 11, category: "web development", image: accscartImage },
              { id: 12, category: "web development", image: accscartImage },
            ];
            
            const Portfolio = () => {
              const [selectedCategory, setSelectedCategory] = useState("all");
            
              const handleCategoryChange = (category) => {
                setSelectedCategory(category);
              };
            
              const filteredItems =
                selectedCategory === "all"
                  ? portfolioItems
                  : portfolioItems.filter((item) => item.category === selectedCategory);
            
              return (
                <div id="portfolio" className="mt-20">
                  <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                    Portfolio
                  </h2>
            
                  {/* Category Filter Buttons with Glassmorphism Effect */}
                  <div className="flex justify-center space-x-4 mb-8">
                    {["all", "graphic design", "3d modelling", "video editing", "web development"].map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`py-2 px-4 rounded-lg border ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-orange-500 to-orange-800 text-white border-none"
                            : "border-white text-white backdrop-blur-md bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
                        }`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
            
                  {/* Portfolio Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredItems.map((item) => (
                      <div
                        key={item.id}
                        className="w-full aspect-square overflow-hidden rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
                      >
                        <img
                          src={item.image}
                          alt={`Portfolio item ${item.id}`}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            };
            
            export default Portfolio;
            
video hersocetion 2

            <div className="flex mt-10 justify-center">
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video
              autoPlay
              loop
              muted
              className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>




          const HeroSection = () => {
            return (
              <div className="hero-section">
                {/* Full Width Background Video */}
                <div className="video-container">
                  <iframe
                    src="https://player.vimeo.com/video/1023530837?background=1&muted=1&loop=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    title="Shineup Video"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100vw',  // Set width to viewport width
                      height: '100vh', // Set height to viewport height
                      zIndex: 0,
                      pointerEvents: 'none', // Disable interaction with the iframe
                    }}
                  ></iframe>
                </div>
          
                {/* Overlay Content */}
                <div className="content">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white">
                    Delivering Creative Video Editing, <br />
                    <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                      Smart SEO for Brands
                    </span>
                  </h1>
                  <p className="mt-10 text-lg text-center text-neutral-200 max-w-4xl">
                    Transform your vision into reality at ShineUp with our innovative video editing,
                    strategic web development, and cutting-edge design solutions. Let’s create something
                    extraordinary together!
                  </p>
                  <div className="flex justify-center my-10">
                    <a
                      href="mailto:digitalshineup@gmail.com"
                      className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md text-white"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            );
          };
          
          export default HeroSection;
          