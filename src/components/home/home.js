import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContentTabs from "./ContentTabs";

function Home() {
  return (
    <>
      <div id="wrapper">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://frontstudent.com/frameworks-css-ca/carousel-1.jpg"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://frontstudent.com/frameworks-css-ca/carousel-2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://frontstudent.com/frameworks-css-ca/carousel-3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Container>
          <h3>We do Yay things</h3>
          <div class="description">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </Container>

        <ContentTabs />
      </div>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="#">
            <i class="fab fa-vimeo-v"></i>
            <i class="fab fa-youtube"></i>
          </Navbar.Brand>
          <Navbar.Brand href="#">hello@yay.com</Navbar.Brand>
          <Navbar.Brand href="#">Copyright 2020</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Home;
