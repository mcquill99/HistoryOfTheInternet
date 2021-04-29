import React from "react";
import frameTwo from "./images/frameTwo.png";
import backgroundTwo from "./images/winxpproblur.png";

class Section2 extends React.Component {
  render() {
    return (
      <div className="section two">
         <div className="background" style={{ backgroundImage: `url(${backgroundTwo})` }}>
        <br />
        <div className="frameTwo" style={{ backgroundImage: `url(${frameTwo})` }}>
          <div className="layout">

            {/* NAVBAR */}
            <div class="row">
                <div class="column eraTwoLogo">
                  <h2>Logo</h2>
                </div>
                <div class="column eraTwoWelcome">
                    <h5>Welcome to the Late 1990s</h5>
                      <div class="row">
                        <div class="column eraTwoNav">
                        <table class="tg">
                          <thead>
                            <tr>
                              <th>EARLY 90s</th>
                              <th style={{backgroundColor: '#FFFFBA'}}>LATE 90s</th>
                              <th>2000s</th>
                              <th>PRESENT</th>
                              <th style={{width: '50%'}}></th>
                            </tr>
                          </thead>
                          </table>
                        </div>
                      </div>
                </div>
              </div>

            <div class="row">
              <div class="column left">
                <h2>Column 1</h2>
                <p>Some text..</p>
              </div>
              <div class="column middle">
                  <h2>Column 2</h2>
                  <p>Some text..</p>
              </div>
              <div class="column right">
                <h2>Column 3</h2>
                <p>Some text..</p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    );
  }
}

export default Section2;