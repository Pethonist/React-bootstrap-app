import React, { Component } from 'react';
import { CarouselItem } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../assets/pexels-deva-darshan-1173777.jpg';
import pic2 from '../assets/pexels-kaique-rocha-775201.jpg';
import pic3 from '../assets/pexels-matthew-montrone-1179229.jpg';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <CarouselItem>
          <img className="d-block w-100" src={pic1} alt="Forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>Lorem ipsum</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img className="d-block w-100" src={pic2} alt="Forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>Lorem ipsum</p>
          </Carousel.Caption>
        </CarouselItem>

        <CarouselItem>
          <img className="d-block w-100" src={pic3} alt="Forest" />
          <Carousel.Caption>
            <h3>Forest image</h3>
            <p>Lorem ipsum</p>
          </Carousel.Caption>
        </CarouselItem>
      </Carousel>
    );
  }
}
