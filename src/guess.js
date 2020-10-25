import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./navbar";
import slide1 from "./images/Slide1.JPG";
import slide2 from "./images/Slide2.JPG";
import slide3 from "./images/Slide3.JPG";
import slide4 from "./images/Slide4.JPG";
import slide5 from "./images/Slide5.JPG";
import slide6 from "./images/Slide6.JPG";
import slide7 from "./images/Slide7.JPG";
import slide8 from "./images/Slide8.JPG";
import slide9 from "./images/Slide9.JPG";
import slide10 from "./images/Slide10.JPG";
import slide11 from "./images/Slide11.JPG";
import slide12 from "./images/Slide12.JPG";
import slide13 from "./images/Slide13.JPG";
import slide14 from "./images/Slide14.JPG";
import slide15 from "./images/Slide15.JPG";
import slide16 from "./images/Slide16.JPG";
import slide17 from "./images/Slide17.JPG";
import slide18 from "./images/Slide18.JPG";
import slide19 from "./images/Slide19.JPG";
import slide20 from "./images/Slide20.JPG";
import slide21 from "./images/Slide21.JPG";
import slide22 from "./images/Slide22.JPG";
import slide23 from "./images/Slide23.JPG";
import slide24 from "./images/Slide24.JPG";
import slide25 from "./images/Slide25.JPG";
import slide26 from "./images/Slide26.JPG";
import slide27 from "./images/Slide27.JPG";
import slide28 from "./images/Slide28.JPG";
import slide29 from "./images/Slide29.JPG";
import slide30 from "./images/Slide30.JPG";
import slide31 from "./images/Slide31.JPG";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

class Guess extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      centerPadding: "100px",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="App">
        <Navbar />
        <div class="container slider">
          <Slider {...settings}>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide1} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide2} />
              </div>
            </div>
            <div class="">
              <div class="slide-image">
                <img src={slide3} />
              </div>
            </div>
            <div class="">
              <div class="slide-image">
                <img class="slide-image" src={slide4} />
              </div>
            </div>
            <div class="">
              <div class="slide-image">
                <img class="slide-image" src={slide5} />
              </div>
            </div>
            <div class="">
              <div class="slide-image">
                <img class="slide-image" src={slide6} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide7} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide8} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide9} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide10} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide11} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide12} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide13} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide14} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide15} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide16} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide17} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide18} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide19} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide20} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide21} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide22} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide23} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide24} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide25} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide26} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide27} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide28} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide29} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide30} />
              </div>
            </div>
            <div class="">
              <div class="">
                <img class="slide-image" src={slide31} />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default Guess;
