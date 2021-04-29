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
          <div className="wrap" id="google" style={{display: 'none'}}>
            <iframe width={'100%'} height={'95%'} src="https://oldgoogle.neocities.org/search-1998.html?q=apple&num=10"></iframe>
            </div>
          {/* <object id='google' type="text/html" data="" style={{display: 'none'}} width={'100%'} height={'100%'}></object> */}
            {/* NAVBAR */}
            <div id="f2content">
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

              {/* LEFT COLUMN */}
              <div class="column left">
              
              {/* MILESTONES */}
              <table>
                <tbody>
                  <tr>
                    <td>MILESTONES</td>
                    </tr>
                    <tr>
                      <td className="itemList">
                        <ul>
                          <li><a>Milestone 1</a></li>
                          <li><a>Milestone 2</a></li>
                          <li><a>Milestone 3</a></li>
                          <li><a>Milestone 4</a></li>
                          <li><a>Milestone 5</a></li>
                        </ul>
                        </td>
                    </tr>
                  </tbody>
                </table>

              {/* LINKS */}
              <table>
                <tbody>
                  <tr>
                    <td>MORE LINKS</td>
                    </tr>
                    <tr>
                      <td className="itemList">
                        <ul>
                          <li><a>Milestone 1</a></li>
                          <li><a>Milestone 2</a></li>
                          <li><a>Milestone 3</a></li>
                          <li><a>Milestone 4</a></li>
                          <li><a>Milestone 5</a></li>
                        </ul>
                        </td>
                    </tr>
                  </tbody>
                </table>

              {/* WEBSITES */}
              <table>
                <tbody>
                  <tr>
                    <td>WEBSITES</td>
                    </tr>
                    <tr>
                      <td className="itemList">
                        <ul>
                          <li><a>Milestone 1</a></li>
                          <li><a>Milestone 2</a></li>
                          <li><a>Milestone 3</a></li>
                          <li><a>Milestone 4</a></li>
                        </ul>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* -----END LEFT COLUMN----- */}

              
              {/* MIDDLE COLUMN */}
              <div class="column middle">
              <table>
                <tbody>
                  <tr>
                    <td>Section 1</td>
                    </tr>
                    <tr>
                      <td>Section 2</td>
                      </tr>
                      <tr>
                        <td>Section 3</td>
                        </tr>
                  </tbody>
                </table>
              </div>
              {/* -----END MIDDLE COLUMN----- */}

              
              {/* RIGHT COLUMN */}
              <div class="column right">
              
              {/* SEARCH THE WEB */}
              <table>
                <tbody>
                  <tr>
                    <td>Search the Web</td>
                    </tr>
                    <tr>
                      <td className="itemList">
                      <input type="search" id="site-search" name="q" aria-label="Search through site content" style={{width: '70%'}} />
                      <input onClick={Search} className="searchBtn" type="image" border="0" src="http://www.alibris.com/images/go.gif" align="absmiddle"></input>
                      </td>
                    </tr>
                  </tbody>
                </table>

              {/* LINKS */}
              <table>
                <tbody>
                  <tr>
                    <td>MORE LINKS</td>
                    </tr>
                    <tr>
                      <td className="itemList">
                        <ul>
                          <li><a>Milestone 1</a></li>
                          <li><a>Milestone 2</a></li>
                          <li><a>Milestone 3</a></li>
                          <li><a>Milestone 4</a></li>
                          <li><a>Milestone 5</a></li>
                        </ul>
                        </td>
                    </tr>
                  </tbody>
                </table>

              {/* WEBSITES */}
              <table>
                <tbody>
                  <tr>
                    <td>WEBSITES</td>
                    </tr>
                    <tr>
                      <td className="itemList">
                        <ul>
                          <li><a>Milestone 1</a></li>
                          <li><a>Milestone 2</a></li>
                          <li><a>Milestone 3</a></li>
                          <li><a>Milestone 4</a></li>
                        </ul>
                        </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* -----END RIGHT COLUMN----- */}
            
            </div>
            {/* -----END COLUMN ROW----- */}
            </div>

          </div>



        </div>

        </div>
    </div>

    );
  }
}

function Search() {
  var q = document.getElementById('site-search').value;
  var browser = document.getElementById('google');
  var url = "https://oldgoogle.neocities.org/search-1998.html?q=" + q;

  document.getElementById('f2content').style.display = 'none';

  browser.data = url;

  browser.style.display = 'contents';
}

export default Section2;