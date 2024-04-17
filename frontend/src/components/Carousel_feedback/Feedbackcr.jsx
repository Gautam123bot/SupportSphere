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
              FIRST SLIDE Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Beatae, error repellat! Atque sapiente est odit quidem
              rerum, beatae accusantium nihil, minus sed quam vitae expedita
              similique! Delectus suscipit eos, voluptas odit consequatur veniam
              quaerat eaque soluta autem doloremque, harum a! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Explicabo obcaecati magnam
              non repellendus sapiente ratione rem iure molestiae possimus
              dolorem.
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
              FIRST SLIDE Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Beatae, error repellat! Atque sapiente est odit quidem
              rerum, beatae accusantium nihil, minus sed quam vitae expedita
              similique! Delectus suscipit eos, voluptas odit consequatur veniam
              quaerat eaque soluta autem doloremque, harum a! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Explicabo obcaecati magnam
              non repellendus sapiente ratione rem iure molestiae possimus
              dolorem.
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
              FIRST SLIDE Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Beatae, error repellat! Atque sapiente est odit quidem
              rerum, beatae accusantium nihil, minus sed quam vitae expedita
              similique! Delectus suscipit eos, voluptas odit consequatur veniam
              quaerat eaque soluta autem doloremque, harum a! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Explicabo obcaecati magnam
              non repellendus sapiente ratione rem iure molestiae possimus
              dolorem.
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
              FIRST SLIDE Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Beatae, error repellat! Atque sapiente est odit quidem
              rerum, beatae accusantium nihil, minus sed quam vitae expedita
              similique! Delectus suscipit eos, voluptas odit consequatur veniam
              quaerat eaque soluta autem doloremque, harum a! Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Explicabo obcaecati magnam
              non repellendus sapiente ratione rem iure molestiae possimus
              dolorem.
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
