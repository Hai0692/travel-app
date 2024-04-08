import React, { useEffect } from "react";
import "./main.css";
import { IoLocationOutline } from "react-icons/io5";
import { TbClipboardCheck } from "react-icons/tb";
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";
import img4 from "../../Assets/img4.jpg";
import img5 from "../../Assets/img5.jpg";
import img6 from "../../Assets/img6.jpg";
import img7 from "../../Assets/img7.jpg";
import img8 from "../../Assets/img8.jpg";
import img9 from "../../Assets/img9.jpg";
import img10 from "../../Assets/img10.jpg";

import Aos from "aos";
import "aos/dist/aos.css";
const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
  {
    id: 10,
    imgSrc: img10,
    destTitle: "Nhat Le Beach",
    location: "Quang Binh",
    grade: "CULTURE RELAX",
    fees: "$700",
    description:
      "the optional of romantic, NhatLe Beach is one of the best travel destination in VietNam. This place is know for it luxury stays ans adventure activities",
  },
];

const Main = () => {
  //lets create a react hook to add scrool animation..

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos='fade-right' className="title">Most visited destinations</h3>
      </div>
      <div className="secContent grid">
        {/* abc method */}
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} data-aos="fade-up" className="singleDestination">
                {/* here it the single id from the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfor">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <IoLocationOutline className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS
                    <TbClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
