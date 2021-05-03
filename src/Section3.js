import React from "react";
import frameThree from "./images/frameThree.png";
import backgroundThree from "./images/mac-leopard-blur.png";
import logoEraThree from "./images/logoEraThree.png";
import marathon from "./images/marathon.jpeg";
import $ from 'jquery';

class Section3 extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="background" style={{ backgroundImage: `url(${backgroundThree})` }}>
      <br />
      <div className="frameThree" style={{ backgroundImage: `url(${frameThree})` }}>
        <div className="layout">
        <div className="logoHolder">
          <div className="ThirdLogo">
            <br></br>
            <img src={logoEraThree} width={360}/>
          </div>
          </div>
          <div className="whiteHolder">
            <div className="feed" id="loginPageFeed">
              <img src={marathon} width={550} height={340}/>
              <br></br>
              <div className="socialMediaDescription">
              By the late 2000s, the number of users on social media had skyrocketed. Login to explore this era.
              </div>
            </div>


            
            <div className="feed" id="loggedInFeed" style={{display:'none'}}>
              alternate div, trying to switch to this. delete this one if you delete anything, the feed with id loginPageFeed is working fine on its own





            </div>
            <div className="sidebar">
              <p>Sign into account</p>
              <button id="loginButton" onClick={SwitchDiv}>Log in</button>
              
            </div>
            
          </div>
          </div>
          </div>
      </div>
      {/* <img src={frameOne} /> */}
    </div>

    );
  }
}

function SwitchDiv() {
  const login_screen = document.getElementById("loginPageFeed");
  const logged_in_screen = document.getElementById("loggedInFeed");
  const login_btn = document.getElementById("loginButton");

  login_screen.style.display = 'none';
  logged_in_screen.style.display = 'block';

  // If u want to remove login button, too. 
  // login_btn.style.display = 'none';
  
}

/* this is the jquery i was trying to use to switch the div content */
$('#loginButton').on('click', function(){
  if($('#loginPageFeed').css('display')!='none'){
    $('#loggedInFeed').html('Logged in feed').show().siblings('div').hide();
  }else if($('#loggedInFeed').css('display')!='none'){
    $('#loginPageFeed').show().siblings('div').hide();
  }
});










export default Section3;


