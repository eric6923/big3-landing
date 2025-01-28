import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles
import "swiper/css/autoplay"; // Import autoplay styles
import { Pagination, Autoplay } from "swiper/modules"; // Import necessary modules
import FullPortfolio from "../pages/FullPortfolio";

// Import the sample image for the portfolio items
import imgPath from "../assets/portfolioimgs/accscart.webp";
import weebieshub from "../assets/portfolioimgs/weebposter.webp";
import accountscorner from "../assets/portfolioimgs/accountscorner.webp";
import threedweb from "../assets/portfolioimgs/3dweb.png";
import aotposfree from "../assets/portfolioimgs/aotposfreecopy.webp";
import bestpvaaccounts from "../assets/portfolioimgs/bestpvaaccounts.webp";
import carrent from "../assets/portfolioimgs/carrent.png";
import custom from "../assets/portfolioimgs/custom-design-poster.jpg";
import forest from "../assets/portfolioimgs/forest-animation.jpg";
import manickavasagam from "../assets/portfolioimgs/manickavasagam.webp";
import moonposterutopia from "../assets/portfolioimgs/moonposterutopia.webp";
import postereng from "../assets/portfolioimgs/postereng.webp";
import screposter from "../assets/portfolioimgs/screposter.webp";
import utopia from "../assets/portfolioimgs/utopia-anime.webp";
import viralaccounts from "../assets/portfolioimgs/viralaccounts.webp";
import wantedposter from "../assets/portfolioimgs/wantedposter.webp";
import weebies from "../assets/portfolioimgs/weebieshub.png";
import bliendwebsite from "../assets/portfolioimgs/bliendwebsite.webp";
import world from "../assets/portfolioimgs/world.jpg";

// Define categories and portfolio items
const categories = [
  { id: "all", label: "All" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "3d-modelling", label: "3D Modelling" },
  { id: "web-development", label: "Web Development" },
];

const portfolioItems = [
  {
    id: 1,
    category: "graphic-design",
    img: weebieshub,
    title: "Weebies Hub",
  },
  {
    id: 2,
    category: "graphic-design",
    img: accountscorner,
    title: "Accounts Corner",
  },
  {
    id: 3,
    category: "graphic-design",
    img: aotposfree,
    title: "AOT Poster",
  },
  {
    id: 4,
    category: "graphic-design",
    img: bestpvaaccounts,
    title: "Best PVA Accounts",
  },
  {
    id: 5,
    category: "graphic-design",
    img: custom,
    title: "Custom Design TShirt",
  },
  {
    id: 6,
    category: "graphic-design",
    img: moonposterutopia,
    title: "Moon Poster Utopia",
  },
  {
    id: 7,
    category: "graphic-design",
    img: postereng,
    title: "Engineers Day",
  },
  {
    id: 8,
    category: "graphic-design",
    img: screposter,
    title: "Private Screening Poster",
  },
  {
    id: 9,
    category: "graphic-design",
    img: utopia,
    title: "Utopia Anime",
  },
  {
    id: 10,
    category: "graphic-design",
    img: viralaccounts,
    title: "Viral Accounts",
  },
  {
    id: 11,
    category: "graphic-design",
    img: wantedposter,
    title: "Wanted Poster",
  },
  {
    id: 12,
    category: "3d-modelling",
    img: world,
    title: "World Modelling",
  },
  {
    id: 13,
    category: "3d-modelling",
    img: forest,
    title: "Forest Modelling",
  },
  {
    id: 14,
    category: "web-development",
    img: bliendwebsite,
    title: "Bliend Web Development",
  },
  {
    id: 15,
    category: "web-development",
    img: manickavasagam,
    title: "Manickavasagam Web Development",
  },
  {
    id: 16,
    category: "web-development",
    img: threedweb,
    title: "3D Web Development",
  },
  {
    id: 17,
    category: "web-development",
    img: carrent,
    title: "Event Web Development",
  },
  {
    id: 18,
    category: "web-development",
    img: weebies,
    title: "Weebieshub Web Development",
  },
];


const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter portfolio items based on selected category
  const filteredItems = portfolioItems.filter(
    (item) => selectedCategory === "all" || item.category === selectedCategory
  );

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8"> {/* Added responsive padding */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Works
      </h2>
      <div className="flex justify-center gap-4 my-8 flex-wrap"> {/* Allow wrapping on smaller screens */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 border rounded-md transition duration-300 text-sm sm:text-base ${
              selectedCategory === category.id
                ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                : "border-white text-white bg-transparent"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="relative">
        <Swiper
          modules={[Pagination, Autoplay]} // Add pagination and autoplay modules
          pagination={{ clickable: true }} // Enable clickable pagination
          loop={true} // Enable looping
          autoplay={{
            delay: 3000, // Delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="max-w-7xl mx-auto"
          onMouseEnter={(swiper) => swiper.autoplay.stop()} // Stop autoplay on hover
          onMouseLeave={(swiper) => swiper.autoplay.start()} // Start autoplay on mouse leave
        >
          {filteredItems.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="p-4 text-center text-white">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination Dots */}
        <div
          className="swiper-pagination"
          style={{ marginTop: "10px", textAlign: "center" }}
        ></div>
      </div>

      {/* View Full Portfolio Button */}
      <div className="hidden lg:flex justify-center space-x-12 items-center mt-8">
        <a
          href="/full-portfolio" // Update this link to your full portfolio page
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
        >
          View Full Portfolio
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
