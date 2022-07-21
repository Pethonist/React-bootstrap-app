import React, { Component } from 'react';
import {
  Container,
  Nav,
  NavItem,
  Row,
  TabContainer,
  TabContent,
  TabPane,
  Col,
  NavLink,
} from 'react-bootstrap';

export default class Aboute extends Component {
  render() {
    return (
      <Container>
        <TabContainer id="left-tab-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <NavItem>
                  <NavLink eventKey="first">Design</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink eventKey="second">Team</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink eventKey="third">Programming</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink eventKey="fourth">Frameworks</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink eventKey="fifth">Libraries</NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col sm={9}>
              <TabContent className="mt-3">
                <TabPane eventKey="first">
                  <img src="https://www.netsolutions.com/insights/wp-content/uploads/2021/12/11-most-popular-programming-languages.webp" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPane>

                <TabPane eventKey="second">
                  <img />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </TabPane>

                <TabPane eventKey="third">
                  <img />
                  <p></p>
                </TabPane>

                <TabPane eventKey="fourth">
                  <img />
                  <p></p>
                </TabPane>

                <TabPane eventKey="fifth">
                  <img />
                  <p></p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </TabContainer>
      </Container>
    );
  }
}
