import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getImageUrl } from "../../utils";
import "./styles.css"

function Feedbackcr() {
  const settings = {
    dots: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    // autoplaySpeed: 500,
  };

  return (
    <div><br /><br /><br /><br />
      <div className="bg-cyan-500 xl:p-12 lg:p-12 rounded-xl xl:ml-72 xl:mr-72 lg:ml-48 lg:mr-48 ml-4 mr-4 p-4">
        <Slider {...settings}>
          <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-4 items-center inside-contain">
            <div className="person-img col-span-1 max-w-80">
              <img
                src={getImageUrl("hero/heroImage.png")}
                alt=""
                className="w-full text-center"
              />
            </div>
            <h3 className="col-span-2">
            SupportSphere has been a game-changer for me as a rural migrant seeking job opportunities in urban areas. With their platform, I've been able to overcome the challenges of finding work that aligns with my skills and experience. SupportSphere efficiently connects me with suitable job opportunities, making the job search process much smoother and less frustrating.
            </h3>
          </div>
          <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-4 items-center inside-contain">
            <div className="person-img col-span-1 max-w-80">
              <img
                src={getImageUrl("hero/heroImage.png")}
                alt=""
                className="w-full text-center"
              />
            </div>
            <h3 className="col-span-2">
            "Thanks to SupportSphere, my transition from a rural to an urban setting has been much easier in terms of finding employment. Their platform understands the unique challenges faced by individuals like me and provides tailored solutions. I no longer struggle to find job openings that recognize and utilize my capabilities, all thanks to SupportSphere."
            </h3>
          </div>
          <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-4 items-center inside-contain">
            <div className="person-img col-span-1 max-w-80">
              <img
                src={getImageUrl("hero/heroImage.png")}
                alt=""
                className="w-full text-center"
              />
            </div>
            <h3 className="col-span-2">
            SupportSphere has been a lifesaver for me during my job search journey after relocating from a rural area to an urban center. Their platform not only understands the hurdles I face but also actively works to connect me with job opportunities that value my skills. I'm grateful to have found a service like SupportSphere that empowers rural migrants like me to find meaningful work in urban areas."
            </h3>
          </div>
          <div className="xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 gap-4 items-center inside-contain">
            <div className="person-img col-span-1 max-w-80">
              <img
                src={getImageUrl("hero/heroImage.png")}
                alt=""
                className="w-full text-center"
              />
            </div>
            <h3 className="col-span-2">
            "Thanks to SupportSphere, my transition to urban living has been much smoother, especially in terms of finding employment. Their platform addresses the gap between rural migrants and job opportunities in urban areas by providing a space where our skills are recognized and appreciated. SupportSphere is truly a beacon of hope for individuals like me seeking fulfilling work."
            </h3>
          </div>
          
          
        </Slider>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Feedbackcr;
