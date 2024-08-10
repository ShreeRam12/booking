import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Responsive = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const items = [
    { date: '2024-08-09', price: '$150' },
    { date: '2024-08-10', price: '$155' },
    { date: '2024-08-11', price: '$160' },
    { date: '2024-08-12', price: '$165' },
    { date: '2024-08-13', price: '$170' },
  ];

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all 1s"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {items.map((item, index) => (
        <div key={index} className="carousel-item">
          <div className="date">{item.date}</div>
          <div className="price">{item.price}</div>
        </div>
      ))}
    </Carousel>

  );
}

export default Responsive;
