import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import { baseUrl } from "../../shared/baseUrl";


const TripCarousel = ({ tripsCarousel }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating] = useState(false);

  const next = () => {
    const nextIndex = activeIndex === tripsCarousel.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    if (animating) return;
  };

  const previous = () => {
    const nextIndex = activeIndex === 0 ? tripsCarousel.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    if (animating) return;
  };

  const slides = tripsCarousel.map((item) => {
    return (
      <CarouselItem className="trips-carousel" key={item.id}>
        <img className="carousel-image" src={baseUrl + item.src} alt={item.alt} />
      </CarouselItem>
    );
  });

  return (
    <Carousel className="mt-4 mt-lg-0" activeIndex={activeIndex} next={next} previous={previous} pause={{ hover: false }} interval={4000} ride="carousel">
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default TripCarousel;
