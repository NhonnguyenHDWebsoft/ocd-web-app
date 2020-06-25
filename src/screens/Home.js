import React from 'react';
import BaseScreen from "../base/BaseScreen";

class Home extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = { user: null };
    }

    render() {
        return (
            <div className="home-page">
                <div>Here is Home page</div>
            </div>
        );
    }

}

export default Home;
