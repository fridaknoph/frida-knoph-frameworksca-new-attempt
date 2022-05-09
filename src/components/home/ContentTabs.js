import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function ContentTabs() {
  return (
    <Container>
      <div className="">
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
          <Tab eventKey="first" title="First">
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="http://frontstudent.com/frameworks-css-ca/tab-1.jpg"
                  rounded
                />
              </Col>
              <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies auctor consequat. Duis in sodales enim. Nam eget
                varius magna, quis imperdiet orci. Duis cursus venenatis
                suscipit. Nam bibendum pulvinar imperdiet. Pellentesque dapibus
                nunc odio, id viverra lorem blandit at.
                <div className="social_media">
                  Share<i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="second" title="Second">
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="http://frontstudent.com/frameworks-css-ca/tab-2.jpg"
                  rounded
                />
              </Col>
              <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies auctor consequat. Duis in sodales enim. Nam eget
                varius magna, quis imperdiet orci. Duis cursus venenatis
                suscipit. Nam bibendum pulvinar imperdiet. Pellentesque dapibus
                nunc odio, id viverra lorem blandit at.
                <div className="social_media">
                  Share<i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="third" title="Third">
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="http://frontstudent.com/frameworks-css-ca/tab-3.jpg"
                  rounded
                />
              </Col>
              <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies auctor consequat. Duis in sodales enim. Nam eget
                varius magna, quis imperdiet orci. Duis cursus venenatis
                suscipit. Nam bibendum pulvinar imperdiet. Pellentesque dapibus
                nunc odio, id viverra lorem blandit at.
                <div className="social_media">
                  Share<i class="fab fa-facebook-f"></i>
                  <i class="fab fa-twitter"></i>
                </div>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </div>
    </Container>
  );
}

export default ContentTabs;
