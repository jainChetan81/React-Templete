import React from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1
} from "variables/charts.jsx";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
    state = {
        activeNav: 1,
        chartExample1Data: "data1"
    };
    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index,
            chartExample1Data:
                this.state.chartExample1Data === "data1" ? "data2" : "data1"
        });
        let wow = () => {
            console.log(this.state);
        };
        wow.bind(this);
        setTimeout(() => wow(), 1000);
        // this.chartReference.update();
    };
    componentWillMount() {
        if (window.Chart) {
            parseOptions(Chart, chartOptions());
        }
    }
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    <Row>
                        <Col className="mb-5 mb-xl-0" xl="8">
                            <Card className="bg-gradient-default shadow">
                                <CardHeader className="bg-transparent">
                                    <Row className="align-items-center">
                                        <div className="col">
                                            <h6 className="text-uppercase text-light ls-1 mb-1">
                                                Overview
                                            </h6>
                                            <h2 className="text-white mb-0">
                                                Sales value
                                            </h2>
                                        </div>
                                        <div className="col">
                                            <Nav
                                                className="justify-content-end"
                                                pills>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames(
                                                            "py-2 px-3",
                                                            {
                                                                active:
                                                                    this.state
                                                                        .activeNav ===
                                                                    1
                                                            }
                                                        )}
                                                        href="#pablo"
                                                        onClick={e =>
                                                            this.toggleNavs(
                                                                e,
                                                                1
                                                            )
                                                        }>
                                                        <span className="d-none d-md-block">
                                                            Month
                                                        </span>
                                                        <span className="d-md-none">
                                                            M
                                                        </span>
                                                    </NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink
                                                        className={classnames(
                                                            "py-2 px-3",
                                                            {
                                                                active:
                                                                    this.state
                                                                        .activeNav ===
                                                                    2
                                                            }
                                                        )}
                                                        data-toggle="tab"
                                                        href="#pablo"
                                                        onClick={e =>
                                                            this.toggleNavs(
                                                                e,
                                                                2
                                                            )
                                                        }>
                                                        <span className="d-none d-md-block">
                                                            Week
                                                        </span>
                                                        <span className="d-md-none">
                                                            W
                                                        </span>
                                                    </NavLink>
                                                </NavItem>
                                            </Nav>
                                        </div>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    {/* Chart */}
                                    <div className="chart">
                                        <Line
                                            data={
                                                chartExample1[
                                                    this.state.chartExample1Data
                                                ]
                                            }
                                            options={chartExample1.options}
                                            getDatasetAtEvent={e =>
                                                console.log(e)
                                            }
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Index;
