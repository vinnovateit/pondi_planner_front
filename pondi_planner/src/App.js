import React from "react";
import "./App.css";

// COMPONENTS
import Home from "./components/home/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                {/* NAV BAR GOES HERE */}
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/boom" exact>
                        <p>dasd</p>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
