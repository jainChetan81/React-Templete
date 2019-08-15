import React from "react";

// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class Tables extends React.Component {
    render() {
        return (
            <>
                <Header />
                {/* Page content */}
                <Container className="mt--7" fluid>
                    {/* Dark table */}
                    <Row className="mt-5">
                        <div className="col">
                            <Card className="bg-default shadow">
                                <CardHeader className="bg-transparent border-0">
                                    <h3 className="text-white mb-0">
                                        Card tables
                                    </h3>
                                </CardHeader>
                                <Table
                                    className="align-items-center table-dark table-flush"
                                    responsive>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Project</th>
                                            <th scope="col">Budget</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Users</th>
                                            <th scope="col">Completion</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }>
                                                        <img
                                                            alt="..."
                                                            src={require("assets/img/theme/bootstrap.jpg")}
                                                        />
                                                    </a>
                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            Argon Design System
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$2,500 USD</td>
                                            <td>
                                                <Badge
                                                    color=""
                                                    className="badge-dot mr-4">
                                                    <i className="bg-warning" />
                                                    pending
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip731399078"
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }>
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={require("assets/img/theme/team-1-800x800.jpg")}
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip731399078">
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip491083084"
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }>
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={require("assets/img/theme/team-2-800x800.jpg")}
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip491083084">
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip528540780"
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }>
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={require("assets/img/theme/team-3-800x800.jpg")}
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip528540780">
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip237898869"
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }>
                                                        <img
                                                            alt="..."
                                                            className="rounded-circle"
                                                            src={require("assets/img/theme/team-4-800x800.jpg")}
                                                        />
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip237898869">
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">
                                                        60%
                                                    </span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="60"
                                                            barClassName="bg-warning"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                        onClick={e =>
                                                            e.preventDefault()
                                                        }>
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu
                                                        className="dropdown-menu-arrow"
                                                        right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e =>
                                                                e.preventDefault()
                                                            }>
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e =>
                                                                e.preventDefault()
                                                            }>
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={e =>
                                                                e.preventDefault()
                                                            }>
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Tables;
