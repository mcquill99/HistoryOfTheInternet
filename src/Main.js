import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactFullpage from '@fullpage/react-fullpage';
class App extends React.Component{
    render(){
        return(
            <div className="App">
                <ReactFullpage
                //fullpage options
                licenseKey = {'YOUR_KEY_HERE'}
                scrollingSpeed = {1000} /* Options here */
            
                render={({ state, fullpageApi }) => {
                    return (
                    <ReactFullpage.Wrapper>
                        <div className="section">
                        <p>Section 1 (welcome to fullpage.js)</p>
                        {/*<button onClick={() => fullpageApi.moveSectionDown()}> 
                            Click me to move down
                        </button>*/}
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
    
}
  
  export default App;