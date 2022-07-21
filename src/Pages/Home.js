import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import { Container, CardGroup, Card, CardImg, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className="text-center m-4">Our team</h2>
          <CardGroup className="m-4">
            <Card>
              <CardImg
                variant="top"
                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card>
              <CardImg
                variant="top"
                src="https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>UI/UX designers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>

            <Card>
              <CardImg
                variant="top"
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </Card.Text>
                <Button variant="primary">About team</Button>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </>
    );
  }
}
