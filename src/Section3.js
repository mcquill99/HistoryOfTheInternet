import React from "react";
import frameThree from "./images/frameThree.png";
import backgroundThree from "./images/mac-leopard-blur.png";
import logoEraThree from "./images/logoEraThree.png";
import marathon from "./images/marathon.jpeg";
import web2 from "./images/web2.png";
import skiPic from "./images/ski.jpeg";
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
              <img src={skiPic} width={'100%'} height={'auto'}/>
              <br></br>
              <div className="socialMediaDescription">
              By the late 2000s, the number of users on social media had skyrocketed. Login to explore this era.
              </div>
            </div>
            
            <div className="feed" id="loggedInFeed" style={{display:'none'}}>
              <div className="newsFeedLabel">Feed</div>

              <div className="createPost" id="create-post">
                <h2>Create New Post</h2>
                <input type="text" placeholder="Post Title" id="title" style={{width:'75%'}} required/>
                <br/><br/>
                  <textarea placeholder="What's on your mind?" id="type-area" name="post" rows="6" cols="60">
                    </textarea>
                    <br/><br/>
                    <input type="submit" id="submit-post" onClick={WritePost} value="Post"/>
                    <p id="error">Error: Please fill in all fields.</p>
              </div>

             <div id="post-list">

              <div className="socialPost">
                <h1>Web 2.0 is here!</h1>
                <p>Web 2.0 refers to websites that emphasize user-generated content and participatory culture for end users.
                  Users interact through social media feeds with user-generated content. 
                  Example of web 2.0 sites include Facebook, YouTube, Flickr, and Wordpress.
                </p>
                <div className="postImg">
                  <img src={web2}/>
                </div>
                

              </div>

              <div className="socialPost">
                <h1>Social media is booming!</h1>
                <p>As you may have noticed, social media has become more and more popular within the past few years! And this is just the beginning! The growth of platforms has skyrocketed, an example being with YouTube: in 2006 it had 19.88 million active users a month, then by 2009 the site had 413.61 million active users a month! Talk about growth! 
                </p>
                

              </div>


              <div className="socialPost">
                <h1>Check Out This Funny Viral Video!</h1>
                <iframe width="470" height="225" src="https://www.youtube.com/embed/txqiwrbYGrs"
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
                <p></p>



              </div>


              <div className="socialPost">
                <h1>Facebook Introduces the "Like" Button</h1>
                <p>Facebook just added a new way to interact with user posts. Now, friends and family can show their love for everything from family photos to funny cat pictures!</p>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png'></img>



              </div>

              </div>





            </div>
            <div className="sidebar">
              <p id="sign-in">Sign in here</p>
              <input type="text" placeholder="Enter Username" id="uname" style={{width:'80%'}} required/>
              <br/><br/>
              <input type="password" placeholder="Enter Password" id="pwd" style={{width:'80%'}} required/>
              <br></br>
              <br></br>
              <button id="loginButton" onClick={SwitchDiv}>Log in</button>
              <p id="login-error">Error: Please fill in all fields.</p>
              
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
  document.getElementById("login-error").style.display = "none";
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
  else{
    document.getElementById("login-error").style.display = "block";
  }

  // If u want to remove login button, too. 
  // login_btn.style.display = 'none';
  
}

function WritePost() {
  var title = document.getElementById("title");
  var content = document.getElementById("type-area");
  document.getElementById("error").style.display = "none";

  var uname = document.getElementById("sign-in").innerHTML;
  var uarray = uname.split(" ")[2];
  var username = uarray.substring(0, uarray.length - 1);

  if(title.value && content.value){
    const newDiv = document.createElement("div");
    newDiv.className = "socialPost"
    const newTitle = document.createElement("H1");
    newTitle.innerHTML = title.value
    const newAuthor = document.createElement("P");
    newAuthor.innerHTML = username + ":";
    newAuthor.style.color = 'gray';
    const newBody = document.createTextNode(content.value);

    console.log(newAuthor);

    newDiv.appendChild(newTitle);
    newDiv.appendChild(document.createElement("HR"))
    newDiv.appendChild(newAuthor);
    newDiv.appendChild(document.createElement('br'));
    newDiv.appendChild(newBody);

    const currentDiv = document.getElementById("post-list");
    currentDiv.insertBefore(newDiv, currentDiv.firstElementChild);

    title.value =  "";
    content.value = "";

}   
  else{
    document.getElementById("error").style.display = "block";
  }
 
  
}

export default Section3;


