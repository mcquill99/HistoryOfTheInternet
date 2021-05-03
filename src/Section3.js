import React from "react";
import frameThree from "./images/frameThree.png";
import backgroundThree from "./images/mac-leopard-blur.png";
import logoEraThree from "./images/logoEraThree.png";
import marathon from "./images/marathon.jpeg";
import web2 from "./images/web2.png";
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
              <div className="newsFeedLabel">News Feed</div>
              <div className="socialPost">
                <h4>Web 2.0 is here!</h4>
                <p>Web 2.0 refers to websites that emphasize user-generated content and participatory culture for end users.
                  Users interact as through social media feeds with user-generated content. 
                  Example of web 2.0 sites include Facebook, YouTube, Flickr, and Wordpress.
                </p>
                <div className="postImg">
                  <img src={web2}/>
                </div>



              </div>
              <br></br>
              <br></br>

              <div className="socialPost">
                <h1>David After Dentist</h1>
                <iframe width="470" height="225" src="https://www.youtube.com/embed/txqiwrbYGrs"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
                <p></p>



              </div>
              <br></br>
              <br></br>


              <div className="socialPost">
                this is the content for post 3



              </div>





            </div>
            <div className="sidebar">
              <p id="sign-in">Sign into account</p>
              <input type="text" placeholder="Enter Username" id="uname" style={{width:'80%'}} required/>
              <br/><br/>
              <input type="password" placeholder="Enter Password" id="pwd" style={{width:'80%'}} required/>
              <br></br>
              <br></br>
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
  const sign_in_text = document.getElementById("sign-in");

  const uname = document.getElementById("uname");
  const pwd = document.getElementById("pwd");

  // Only switch div if user enters a username and password
  if((uname.value.length > 0) && (pwd.value.length > 0)){
    login_screen.style.display = 'none';
    logged_in_screen.style.display = 'block';
    sign_in_text.innerHTML = "Welcome back, " + uname.value + "!";
    login_btn.style.display = 'none';
    uname.style.display = 'none';
    pwd.style.display = 'none';
  }

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


