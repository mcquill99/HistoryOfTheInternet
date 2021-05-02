import React from "react";
import frameTwo from "./images/frameTwo.png";
import backgroundTwo from "./images/winxpproblur.png";
import back from "./images/back.jpg";
import pizzaHut from "./images/pizza-hut-1998.gif";
import netflix from "./images/netflix.gif";
import placeholder from "./images/placeholder.png";
import logoTwo from ".images/secondFrameLogo.png"

class Section2 extends React.Component {
  render() {
    return (
      <div className="section two">
         <div className="background" style={{ backgroundImage: `url(${backgroundTwo})` }}>
        <br />
        <div className="frameTwo" style={{ backgroundImage: `url(${frameTwo})` }}>
        <img id="back-btn" src={back} style={{display: 'none'}} onClick={HideSearch}/>
          <div className="layout">

          <div className="wrap" id="google" style={{display: 'none'}}>
            <iframe id="google-site" width={'100%'} height={'95%'} src="https://oldgoogle.neocities.org/search-1998.html?q=apple&num=10"></iframe>
            </div>

            <div className="wrap" id="pizza" style={{display: 'none'}}>
            <iframe id="pizza-site" width={'100%'} height={'95%'} src="https://www.pizzahut.com/assets/pizzanet/home.html"></iframe>
            </div>

            <div className="wrap" id="netflix" style={{display: 'none'}}>
            <iframe id="netflix-site" width={'100%'} height={'95%'} src="netflix.html"></iframe>
            </div>

          {/* <object id='google' type="text/html" data="" style={{display: 'none'}} width={'100%'} height={'100%'}></object> */}
            {/* NAVBAR */}
            <div id="f2content">
            <div class="row">
                <div class="column eraTwoLogo">
                <img src={logoTwo}></img>
                </div>
                <div class="column eraTwoWelcome">
                    <h5>Welcome to the early 2000s</h5>
                      <div class="row">
                        <div class="column eraTwoNav">
                        <table class="tg">
                          <thead>
                            <tr>
                              <th>TAB 1</th>
                              <th style={{backgroundColor: '#FFFFBA'}}>TAB 2</th>
                              <th>TAB 3</th>
                              <th>TAB 4</th>
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
                          <li><a href="#">Milestone 1</a></li>
                          <li><a>Milestone 2</a></li>
                          <li><a>Milestone 3</a></li>
                          <li><a>Milestone 4</a></li>
                          <li><a>Milestone 5</a></li>
                        </ul>
                        </td>
                    </tr>
                  </tbody>
                </table>

                <br />

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

                <br />

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
              
              {/* Top box */}
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={placeholder} style={{width:'100%'}}/>
                    </td>
                    <td>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pulvinar volutpat est ut congue. Nullam id velit risus.
                      </p>
                    </td>
                    </tr>
                  </tbody>
                </table>

                    <br/>

                {/* Middle box */}
                <table>
                  <tbody>
                      <tr>
                        <td>
                          <div className="row">

                            <div className="column entry">
                              <img src={placeholder} style={{width:'50%'}}/>
                              <p style={{float: 'right'}}>About image 1</p>
                            </div>

                            <div className='column' style={{width:'10%'}}></div>
                            
                            <div className="column entry">
                              <img src={placeholder} style={{width:'50%'}}/>
                              <p style={{float: 'right'}}>About image 2</p>    
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                      
                      <br/>

                {/* Bottom box */}
                <table>
                  <tbody>
                      <tr>
                        <td>
                          <div className="row">

                            <div className="column entry">
                              <img src={placeholder} style={{width:'50%'}}/>
                              <p style={{float: 'right'}}>About image 1</p>
                            </div>

                            <div className='column' style={{width:'10%'}}></div>
                            
                            <div className="column entry">
                              <img src={placeholder} style={{width:'50%'}}/>
                              <p style={{float: 'right'}}>About image 2</p>    
                            </div>
                          </div>
                        </td>
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

              {/* AD */}

              <br />

              <img onClick={Pizza} src={pizzaHut} style={{cursor: 'pointer'}} width={'100%'}/>


              {/* PEOPLE */}
              <br /><br />
              <table>
                <tbody>
                  <tr>
                    <td>PEOPLE</td>
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

                <br />
                <img onClick={Netflix} style={{border: 'black 1px solid'}} src={netflix} width={'100%'}/>
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
  var browserDiv = document.getElementById('google');
  var browser = document.getElementById('google-site');
  var url = "https://oldgoogle.neocities.org/search-1998.html?q=" + q + "&num=10";

  document.getElementById('f2content').style.display = 'none';
  document.getElementById('back-btn').style.display = 'block';

  browser.src = url;
  document.getElementById('google-site').src += '';

  browserDiv.style.display = 'contents';
}

function HideSearch(){
  document.getElementById('f2content').style.display = 'block';
  document.getElementById('google').style.display = 'none';
  document.getElementById('pizza').style.display = 'none';
  document.getElementById('netflix').style.display = 'none';
  document.getElementById('back-btn').style.display = 'none';
}

function Pizza() {
  var browserDiv = document.getElementById('pizza');
  var browser = document.getElementById('pizza-site');

  document.getElementById('pizza-site').src += '';

  document.getElementById('f2content').style.display = 'none';
  document.getElementById('back-btn').style.display = 'block';

  browserDiv.style.display = 'contents';
}

function Netflix() {
  var browserDiv = document.getElementById('netflix');
  var browser = document.getElementById('netflix-site');

  document.getElementById('f2content').style.display = 'none';
  document.getElementById('back-btn').style.display = 'block';

  browserDiv.style.display = 'contents';
}

export default Section2;