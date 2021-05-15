import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Carousel.module.scss';

const Component = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.root}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            srcSet="
              /images/carousel/first-small.jpg 768w,
              /images/carousel/first-normal.jpg 1920w
            "
            src="/images/carousel/first-normal.jpg"
            alt="First slide"
          />
          <Carousel.Caption className={styles.carouselText}>
            <h3>Best Quality</h3>
            <p>Our products are tested by the most demanding pets</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            srcSet="
              /images/carousel/second-small.jpg 640w,
              /images/carousel/second-normal.jpg 1920w
            "
            src="/images/carousel/second-normal.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className={styles.carouselText}>
            <h3>Competitive prices</h3>
            <p>Along with high quality, we offer competitive prices</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            srcSet="
              /images/carousel/third-small.jpg 640w,
              /images/carousel/third-normal.jpg 1920w
            "
            src="/images/carousel/third-normal.jpg"
            alt="Third slide"
          />

          <Carousel.Caption className={styles.carouselText}>
            <h3>High customer satisfaction</h3>
            <p>Almost 100% of satisfied customers and their pets!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as Carousel,
  // Container as Carousel,
  Component as CarouselComponent,
};
