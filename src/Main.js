import React, { Component } from "react";
import { 
    Route, 
    NavLink, 
    HashRouter
}
from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>The History of the Internet</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Page 1</NavLink></li>
                    <li><NavLink to="/Page2">Page 2</NavLink></li>
                    <li><NavLink to="/Page3">Page 3</NavLink></li>
                    <li><NavLink to="/Page4">Page 4</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Page1}/>
                    <Route path="/Page2" component={Page2}/>
                    <Route path="/Page3" component={Page3}/>
                    <Route path="/Page4" component={Page4}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;