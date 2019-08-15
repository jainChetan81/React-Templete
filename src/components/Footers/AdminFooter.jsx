/*eslint-disable*/
import React from "react";
// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";
class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Row className="align-items-center justify-content-xl-between">
                    <Col xl="6">
                        <div className="copyright text-center text-xl-left text-muted">
                            © 2019{" "}
                            <a
                                className="font-weight-bold ml-1"
                                href="http://chetan-portfolio-new.herokuapp.com/"
                                rel="noopener noreferrer"
                                target="_blank">
                                Chetan Jain
                            </a>
                        </div>
                    </Col>

                    <Col xl="6">
                        <Nav className="nav-footer justify-content-center justify-content-xl-end">
                            <NavItem>
                                <NavLink
                                    href="https://github.com/terminatorDX/React-Templete.git"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    MIT License
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default Footer;
