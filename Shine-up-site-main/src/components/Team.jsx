import React from "react";
import loki from "../assets/profile-pictures/loki.jpg";
import user2 from "../assets/profile-pictures/member3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import "./Team.css";
import { Link } from "react-router-dom";

const Team = () => {
  const teamMembers = [
    {
      name: "Lokesh R",
      designation: "Founder",
      image: loki,
      link: "https://lokeshnivash.netlify.app",
    },
    {
      name: "Mohd Salahudeen",
      designation: "Co-Founder",
      image: user4,
      link: "https://thisis-salah.netlify.app",
    },
    {
      name: "Arun Slevam",
      designation: "Co-Founder",
      image: user2,
    },
  ];

  return (
    <div id="team" className="team-section text-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide">
        Our Team
      </h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <a href={member.link} target="_blank" rel="noopener noreferrer">
              <img
                src={member.image}
                alt={member.name}
                className="team-member-image"
              />
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-designation">{member.designation}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
