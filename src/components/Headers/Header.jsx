import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React.Component {
    render() {
        return (
            <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
                <Container fluid>
                    <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                            <Row>
                                <div className="col">
                                    <CardTitle
                                        tag="h5"
                                        className="text-uppercase text-muted mb-0">
                                        Performance
                                    </CardTitle>
                                    <span className="h2 font-weight-bold mb-0">
                                        49,65%
                                    </span>
                                </div>
                                <Col className="col-auto">
                                    <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                        <i className="fas fa-percent" />
                                    </div>
                                </Col>
                            </Row>
                            <p className="mt-3 mb-0 text-muted text-sm">
                                <span className="text-success mr-2">
                                    <i className="fas fa-arrow-up" /> 12%
                                </span>{" "}
                                <span className="text-nowrap">
                                    Since last month
                                </span>
                            </p>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
}

export default Header;
