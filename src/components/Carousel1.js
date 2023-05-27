import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Carousel1() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          zIndex: 999,
          bottom: "0%",
          left: "30%",
        }}
      >
        <button
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            padding: "8px 30px",

            border: "none",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            // background: "linear-gradient(to Right, #76d9a8, #85d6f0)",
            // background: "linear-gradient(to right, transparent , orange )",
            background: "linear-gradient(to right,  #85d6f0, transparent )",
            // marginRight: "10px",
            hover: "pointer",
            width: "100px",
          }}
        >
          Buy
        </button>
        <button
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            padding: "8px 30px",

            border: "none",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            background: "linear-gradient(to Right, #76d9a8, #85d6f0)",
            // marginRight: "10px",
            hover: "pointer",
            width: "100px",
          }}
        >
          Rent
        </button>
        <button
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            padding: "8px 30px",

            border: "none",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            // background: "linear-gradient(to Right, #76d9a8, #85d6f0)",
            background: "linear-gradient(to right, transparent,  #85d6f0 )",

            // marginRight: "10px",
            hover: "pointer",
          }}
        >
          Commertial
        </button>
        <button
          style={{
            color: "white",
            fontSize: "14px",
            fontWeight: "600",
            padding: "8px 30px",

            border: "none",
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            background: "linear-gradient(to Right,  transparent, #85d6f0)",
            // marginRight: "10px",
            hover: "pointer",
          }}
        >
          Book Now
        </button>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ position: "relative" }}>
          <img
            className="d-block w-100"
            src="Images/Mask.png"
            alt="First slide"
          />
          <Carousel.Caption
            style={{
              width: "600px",
              position: "absolute",
              top: 0,
              left: "10%",
              textAlign: "start",
            }}
          >
            <h3>Skanda Group of Constructions</h3>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content
            </p>
            <button
              style={{
                color: "#015474",
                fontSize: "14px",
                fontWeight: "600",
                padding: "8px 30px",

                border: "2px solid #03b6c3",
                borderRadius: "40px",
                background: "linear-gradient(to Right, #76d9a8, #85d6f0)",
                marginRight: "10px",
                hover: "pointer",
              }}
            >
              Book now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/Mask.png"
            alt="Second slide"
          />

          <Carousel.Caption
            style={{
              width: "500px",
              position: "absolute",
              top: 0,
              left: "10%",
              textAlign: "start",
            }}
          >
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button
              style={{
                color: "#015474",
                fontSize: "14px",
                fontWeight: "600",
                padding: "8px 30px",

                border: "2px solid #03b6c3",
                borderRadius: "40px",
                background: "linear-gradient(to Right, #76d9a8, #85d6f0)",
                marginRight: "10px",
                hover: "pointer",
              }}
            >
              Book now
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="Images/Mask.png"
            alt="Third slide"
          />

          <Carousel.Caption
            style={{ width: "500px", position: "absolute", top: 0, left: 0 }}
          >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel1;
