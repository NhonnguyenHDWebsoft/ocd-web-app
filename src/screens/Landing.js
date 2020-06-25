import React from 'react';
import BaseScreen from "../base/BaseScreen";

class Landing extends BaseScreen {

    constructor(props) {
        super(props);
        this.state = { user: null };
    }

    render() {
        return (
            <div className="landing-page">
                <div>Here is Landing page</div>
            </div>
        );
    }

}

export default Landing;
