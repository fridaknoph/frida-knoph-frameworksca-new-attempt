import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./sass/styles.scss";
import Home from "./components/home/home";
import News from "./components/news/news";
import Contact from "./components/contact/contact";
import ContentTabs from "./components/home/ContentTabs";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Router>
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Nav className="mr-auto">
              <Nav.Link className="h1" href="home">
                The YAY Company
              </Nav.Link>
              <Button variant="light">
                <Link to="/">Home</Link>
              </Button>
              <Button variant="light">
                <Link to="/news">News</Link>
              </Button>
              <Button variant="light">
                <Link to="/contact">Contact</Link>
              </Button>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="search-button"
              />
              <Button variant="outline-success">Go</Button>
            </Form>
          </Container>
        </Navbar.Collapse>
      </Navbar>

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
