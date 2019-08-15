import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "store";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.jsx";

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <Switch>
                <Route
                    path="/admin"
                    render={props => <AdminLayout {...props} />}
                />
                <Redirect from="/" to="/admin/index" />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
