import React from "react";

import Header from "components/Headers/Header.jsx";

class Index extends React.Component {
    state = {
        activeNav: 1
    };
    toggleNavs = (e, index) => {
        e.preventDefault();
        this.setState({
            activeNav: index
        });
    };
    render() {
        return (
            <>
                <Header />
            </>
        );
    }
}

export default Index;
