import React from "react";
import { Route, Switch } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import AdminFooter from "components/Footers/AdminFooter.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import routes from "routes.js";
//redux
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const mapStateToProps = state => ({ ...state });
class Admin extends React.Component {
    getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    getBrandText = path => {
        for (let i = 0; i < routes.length; i++) {
            if (
                this.props.location.pathname.indexOf(
                    routes[i].layout + routes[i].path
                ) !== -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };
    render() {
        return (
            <>
                <Sidebar
                    routes={routes}
                    logo={{
                        innerLink: "/admin/index",
                        imgSrc: require("assets/img/brand/argon-react.png"),
                        imgAlt: "..."
                    }}
                />
                <div className="main-content" ref="mainContent">
                    <AdminNavbar
                        brandText={this.getBrandText(
                            this.props.location.pathname
                        )}
                    />
                    <Switch>{this.getRoutes(routes)}</Switch>
                    <Container fluid>
                        <AdminFooter />
                    </Container>
                </div>
            </>
        );
    }
}

export default Admin;
