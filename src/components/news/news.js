import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function News() {
  return (
    <>
      <div id="wrapper"></div>
      <Container>
        <h3>News</h3>
        <div style={{ display: "block", width: 700, margin: 20 }}>
          <Pagination>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
          </Pagination>
        </div>

        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://frontstudent.com/frameworks-css-ca/news-1.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://frontstudent.com/frameworks-css-ca/news-2.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://frontstudent.com/frameworks-css-ca/news-3.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://frontstudent.com/frameworks-css-ca/news-4.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more</Button>
            </Card.Body>
          </Card>
        </CardGroup>
        <CardGroup>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://frontstudent.com/frameworks-css-ca/news-5.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://frontstudent.com/frameworks-css-ca/news-6.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://frontstudent.com/frameworks-css-ca/news-7.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="http://frontstudent.com/frameworks-css-ca/news-8.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">more</Button>
            </Card.Body>
          </Card>
        </CardGroup>

        <div style={{ display: "block", width: 700, margin: 20 }}>
          <Pagination>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
          </Pagination>
        </div>
      </Container>
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

export default News;
