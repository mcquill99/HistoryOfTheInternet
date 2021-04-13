import React from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import "fullpage.js/vendors/scrolloverflow";

import MySection from "./Section"

import "./styles.css";
import "./overrides.css";
import "./index.css";


class App extends React.Component {
    render(){
        return(
            <ReactFullpage
                navigation
                sectionsColor={["#282c34", "#ff5f45", "#0798ec", "#f8d568"]}
                render = {({ state, fullpageApi}) => {
                    return(
                        <div>
                            <MySection content={"Page 1"} />
                            <MySection content={"Page 2"} />
                            <MySection content={"Page 3"} />
                            <MySection content={"Page 4"} />
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
  