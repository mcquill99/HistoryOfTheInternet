import React from "react";
import frameTwo from "./images/frameTwo.png";
import backgroundTwo from "./images/winxpproblur.png";
import back from "./images/back.jpg";
import pizzaHut from "./images/pizza-hut-1998.gif";
import netflix from "./images/netflix.gif";
import y2kLogo from "./images/wwwPurple.png";
import placeholder from "./images/placeholder.png";

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
                  <img src={y2kLogo} width={'95%'}/>
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
                          <li><a href="https://web.archive.org/web/20060128025054if_/http://www.apple.com/macosx/features/safari/" target="_blank">✦ Safari 1.0 launches </a></li>
                          <li><a href='https://web.archive.org/web/20060504131806/http://www.archive.org/web/web.php'target="_blank">✦ Wayback Machine builds an 'Internet Library'</a></li>
                          <li><a  href='https://web.archive.org/web/20060127003234/http://flickr.com/'target="_blank">✦ Flickr creates a photo sharing community</a></li>
                          <li><a href='https://web.archive.org/web/20060315011601/http://www.mozilla.com/firefox/'target="_blank">✦ Firefox launches as a secure browser</a></li>
                          <li><a href="https://web.archive.org/web/20060114055946/http://reddit.com/" target="_blank">✦ Reddit allows communities to flourish</a></li>
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
                    <td>FUN FACTS</td>
                    </tr>
                    <tr>
                      <td className="itemList">
                        <ul>
                          <li>✦ 6 Degrees was the first social media site</li>
                          <li>✦ Million Dollar Homepage became the first viral site</li>
                          <li>✦ Adobe purchased Flash from Macromedia</li>
                          <li>✦ jQuery allowed for the first responsive sites</li>
                          <li>✦ The term 'Human Computer Interaction' was first used in 2000</li>
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
                          <li><a href="http://web.archive.org/web/20040403171900/http://en.wikipedia.org/wiki/Main_Page/" target="_blank">2004 Wikipedia</a></li>
                          <li><a href="http://web.archive.org/web/20000229063201/http://sixdegrees.com/" target="_blank">2000 SixDegrees</a></li>
                          <li><a href="http://web.archive.org/web/20020408112812/http://www.audi.com/com/en/home.jsphttps://web.archive.org/web/20060114055946/http://reddit.com/" target="_blank">First partically responsive site</a></li>
                          <li><a href="http://web.archive.org/web/20040622031340/http://csszengarden.com/" target="_blank">CSS Zen Garden</a></li>
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
                      <img src='https://qph.fs.quoracdn.net/main-qimg-9416d9d1043fa198d5841dff9fb0e8f1'style={{width:'100%'}}/>
                    </td>
                    <td>

                      <p>With the release of HTML 3.2 on January 14, 1997, we inch closer to modern web design! HTML 3.2's release was monumental for anyone, past or present, who has used HTML, as it introduced the ever so popular &lt;div&gt; tag. This, alongside the release of CSS the month prior, created the first easy to use way of styling individual sections of a web page.</p>
                      <p><br/> HTML 3.2 also added tables, which made the layout you see here possible! Tables can be defined as a collection of rows, which each can contain headings and cells.</p>
                      <p><br/> HTML 4 was released less than a year later on December 18, 1997. It was not as big of an update as 3.2 and mostly served to more clearly define HTML semantics.</p>
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
                              <img src='https://lh3.googleusercontent.com/proxy/3sDxOEeyXMydqT0y5kYo9h7xxzUpCZL6NeVgX9tXs8ySz_z1O8ojX6nScRsHocovh7zVrTDohylai6xeEJ-pEmEkbL8Oq9SnYnB3nSX-fz2EzHmW6bdY9q8wI1ztJNdxj5vjVyHPxRu9HC7oQV59ew' style={{width:'50%'}}/>
                              <p style={{float: 'right'}}>CSS 2 was then released in May of 1998, allowing for even more web page customization. It featured new powerful positioning tools, such as the ability to set elements to relative, absolute, or fixed positioning, and also added the z-axis, which lets elements be stacked on top of one another.</p>
                            </div>

                            <div className='column' style={{width:'10%'}}></div>
                            
                            <div className="column entry">
                              <img src='https://blog.hubspot.com/hs-fs/hubfs/The%20Secret%20History%20of%20the%20Google%20Logo-7.jpeg?width=297&name=The%20Secret%20History%20of%20the%20Google%20Logo-7.jpeg' style={{width:'50%'}}/>
                              <p style={{float: 'right'}}>This era also marked the launch of the most popular website to ever exist, Google! It was officially launched as a search engine on September 4th, 1998. It started as a research project to find relevant search results using algorithms, but evolved into the giant it is today. The name is based off of the number <b>Googol</b>, which is the number 10 to the hundredth power. We even have working Google search on this page, give it a try!</p>    
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
                              <img src='https://vanseodesign.com/blog/wp-content/uploads/2011/06/internet-explorer-6-logo.jpg' style={{width:'50%'}}/>
                              <p style={{float: 'right'}}>You may recognize this background as the default background for Windows XP, which launched on October 25, 2001. Along with it came the release of Internet Explorer 6, the browser you're reading this out of! Even though at the time it was known for having many security flaws, Internet Explorer 6 was the top used browser for the majority of the 2000s, being used by 80% of people surfing the web in 2004.  </p>
                            </div>

                            <div className='column' style={{width:'10%'}}></div>
                            
                            <div className="column entry">
                              <img src='https://i.kym-cdn.com/entries/icons/original/000/010/905/myspace.png' style={{width:'50%'}}/>
                              <p style={{float: 'right'}}>This era also saw the birth of social media. Easily the most notable platform at the time was MySpace. Released on August 1, 2003, it allowed anyone with an account to connect with friends, meet new friends, and discover new music! It was so popular; it gained more than one million users in less than a year after its launch. </p>    
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

              <img id="ad" onClick={Pizza} src={pizzaHut} width={'100%'}/>


              {/* PEOPLE */}
              <br /><br />
              <table>
                <tbody>
                  <tr>
                    <td>PEOPLE + ACCOMPLISHMENTS</td>
                    </tr>
                    <tr>
                      <td className="itemList">
                        <ul>
                          <li>✦ Steve Jobs Unveils iPhone </li>
                          <li>✦ Bill Gates Steps Down as Microsoft CEO</li>
                          <li>✦ Jack Dorsey Founds Twitter</li>
                          <li>✦ Mark Zuckerberg Begins Work on FaceBook</li>
                        </ul>
                        </td>
                    </tr>
                  </tbody>
                </table>

                <br />
                <img id="ad" onClick={Netflix} style={{border: 'black 1px solid'}} src={netflix} width={'100%'}/>
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