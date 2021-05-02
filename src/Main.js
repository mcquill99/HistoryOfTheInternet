import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import "fullpage.js/vendors/scrolloverflow";


import Intro from "./Intro";
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"

import "./styles.css";
import "./overrides.css";
import "./index.css";


class App extends React.Component {
    render(){
        return(
            <ReactFullpage
                navigation
                sectionsColor={["#000000, #ffffff", "#ff5f45", "#0798ec", "#f8d568"]}
                normalScrollElements={`.layout`}
                scrollOverflow={true}
                render = {({ state, fullpageApi}) => {
                    return(
                        <div>
                            <Intro />
                            <Section1 />
                            <Section2 />
                            <Section3 />
                            <Section4 />
                        </div>
                    );
                }}
            />
        );
    }
}
  

export default App;
  
/*class App extends React.Component{
    render(){
        return(
            <div className="App">
                <ReactFullpage
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} 
            
                render={({ state, fullpageApi }) => {
                    return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        {/*<button onClick={() => fullpageApi.moveSectionDown()}> 
                            Click me to move down
                        </button>*//*}
                        </div>
                        <div className="section">
                        <p>Section 2</p>
                        </div>
                    </ReactFullpage.Wrapper>
                    );
                }}
                />
            </div>
        );
    }
    
}*/
  