import React, { useState } from "react";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import { Tabs, Tab } from "react-bootstrap";

function Authenticate(props) {
    const [key, setKey] = useState('signin');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
            <Tab eventKey="signin" title="Signin">
                <Signin {...props}/>
            </Tab>
            <Tab eventKey="signup" title="Signup">
                <Signup {...props}/>
            </Tab>
        </Tabs>
    );
}

export default Authenticate;