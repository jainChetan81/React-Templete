import React from "react";
// react component that copies the given text inside your clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";
// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Icons extends React.Component {
    state = {};
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className=" mt--7" fluid>
                    {/* Table */}
                    <Row>
                        <div className=" col">
                            <Card className=" shadow">
                                <CardHeader className=" bg-transparent">
                                    <h3 className=" mb-0">Icons</h3>
                                </CardHeader>
                                <CardBody>
                                    <Row className=" icon-examples">
                                        <Col lg="3" md="6">
                                            <CopyToClipboard
                                                text={"active-40"}
                                                onCopy={() =>
                                                    this.setState({
                                                        copiedText: "active-40"
                                                    })
                                                }>
                                                <button
                                                    className=" btn-icon-clipboard"
                                                    id="tooltip982655500"
                                                    type="button">
                                                    <div>
                                                        <i className=" ni ni-active-40" />
                                                        <span>active-40</span>
                                                    </div>
                                                </button>
                                            </CopyToClipboard>
                                            <UncontrolledTooltip
                                                delay={0}
                                                trigger="hover focus"
                                                target="tooltip982655500">
                                                {this.state.copiedText ===
                                                "active-40"
                                                    ? "Copied"
                                                    : "Copy To Clipboard"}
                                            </UncontrolledTooltip>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Icons;
