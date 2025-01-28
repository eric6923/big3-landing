import React, { useState } from "react";
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
import "./FullPortfolio.css";

const portfolioItems = [
    { id: 1, category: "graphic design", image: weebieshub, title: "Weebies Hub", link: "" },
    { id: 2, category: "graphic design", image: accountscorner, title: "Accounts Corner", link: "" },
    { id: 3, category: "graphic design", image: aotposfree, title: "AOT Poster", link: "" },
    { id: 4, category: "graphic design", image: bestpvaaccounts, title: "Best PVA Accounts", link: "" },
    { id: 5, category: "graphic design", image: custom, title: "Custom Design", link: "" },
    { id: 6, category: "graphic design", image: moonposterutopia, title: "Moon Poster Utopia", link: "" },
    { id: 7, category: "graphic design", image: postereng, title: "Engineers Day", link: "" },
    { id: 8, category: "graphic design", image: screposter, title: "Private Screening Poster", link: "" },
    { id: 9, category: "graphic design", image: utopia, title: "Utopia Anime", link: "" },
    { id: 10, category: "graphic design", image: viralaccounts, title: "Viral Accounts", link: "" },
    { id: 11, category: "graphic design", image: wantedposter, title: "Wanted Poster", link: "" },
    { id: 12, category: "3d modelling", image: world, title: "3D World", link: "" },
    { id: 13, category: "3d modelling", image: forest, title: "Forest Animation", link: "" },
    { id: 14, category: "web development", image: bliendwebsite, title: "Blind Website", link: "" },
    { id: 15, category: "web development", image: manickavasagam, title: "Manickavasagam", link: "" },
    { id: 16, category: "web development", image: threedweb, title: "3D Web", link: "" },
    { id: 17, category: "web development", image: carrent, title: "Car Rent", link: "" },
    { id: 18, category: "web development", image: weebies, title: "Weebies", link: "" },
];

const videoItems = [
    {
        id: 1,
        title: "Motion Graphics",
        videoEmbed: '<iframe width="250" height="300" src="https://www.youtube.com/embed/BGuoWdjazf4?si=nevnci6Vq7Y1gg_q&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 5px"></iframe>',
    },
    {
        id: 2,
        title: "Instagram Reels",
        videoEmbed: '<iframe width="250" height="300" src="https://www.youtube.com/embed/Uj1eD_Rny0c?si=X7nV1lVTXs2P82N1&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 5px"></iframe>',
    },
    {
        id: 3,
        title: "Story telling Video",
        videoEmbed: '<iframe width="250" height="300" src="https://www.youtube.com/embed/NO6zK2qg2D4?si=C5HvJ47TGD8cshOe&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 5px"></iframe>',
    },
    {
        id: 4,
        title: "Instagram Reels",
        videoEmbed: '<iframe width="250" height="300" src="https://www.youtube.com/embed/jTro09S4Yec?si=eJaFtZ-tBWUgtWiE&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 5px"></iframe>',
    },
    {
        id: 5,
        title: "Instagram Reels",
        videoEmbed: '<iframe width="250" height="300" src="https://www.youtube.com/embed/5IO7GhFmzXQ?si=ZOsEBffyWq-DKKVs&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 5px"></iframe>',
    }
];

const FullPortfolio = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => setSelectedImage(image);
    const closeModal = () => setSelectedImage(null);

    return (
        <div id="full-portfolio" className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Full Portfolio
            </h2>

            {/* Portfolio Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {portfolioItems.map((item) => (
                    <div
                        key={item.id}
                        className="w-full aspect-square overflow-hidden rounded-lg border border-orange-700 shadow-sm shadow-orange-400"
                    >
                        <img
                            src={item.image}
                            alt={`Portfolio item ${item.id}`}
                            className="object-cover w-full h-full cursor-pointer"
                            onClick={() => openModal(item.image)}
                        />
                        {/* Clickable Title with Link */}
                        <h3 className="text-center text-lg mt-2">
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-orange-700 hover:text-orange-900">
                                {item.title}
                            </a>
                        </h3>
                    </div>
                ))}
            </div>

            {/* Video Editing Section */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
                Video Editing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {videoItems.map((video) => (
                    <div
                        key={video.id}
                        className="w-full aspect-[250/300] overflow-hidden  flex flex-col items-center"
                    >
                        <div
                            className="object-cover"
                            dangerouslySetInnerHTML={{ __html: video.videoEmbed }}
                        />
                        <h3 className="text-center text-lg mt-2 text-white-700">
                            {video.title}
                        </h3>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Selected" className="modal-image" />
                        <button className="close-button" onClick={closeModal}>&times;</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FullPortfolio;

