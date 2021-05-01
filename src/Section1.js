import React from "react";
import frameOne from "./images/frameOne.png";
import backgroundOne from "./images/win31blur.png";

class Section1 extends React.Component {
    render() {
      return (
        <div className="section one">
          <div className="background" style={{ backgroundImage: `url(${backgroundOne})` }}>
          <br />
          <div className="frameOne" style={{ backgroundImage: `url(${frameOne})` }}>
            <div className="layout">
              <h1>The Earliest Websites</h1>
              <p>Before the world wide web was around, the first web browser, aptly named "WorldWideWeb" was created by Tim Berners-Lee and published on Christmas 1990.
                 <br/> Tim Berners-Lee is considered a pioneer of the internet on many fronts. He, along with Henrik Frystyk Nielsen and Nicola Pellow designed the first line web browser on May 14th, 1991, also aply named "Line Mode Browser." That means he was a part of making both the first and second ever web browsers. 
                 <br/> <br/> Tim Berners-Lee was also the creator of HTML, the language we used to write this very page. After the success of his first two browsers, he went to create the first index of websites called the <b>WWW Virtual Library</b> in August of 1991. It was a colelction of hyperlinks organized into a tree of categories of different fields of interest. although the website wasn't maintained, the original list of indices can be found <a href="http://vlib.org/">here</a>. 
                 <br/> <br/> Tim Berners-Lee also worked to create and launch the <a href="http://info.cern.ch/hypertext/WWW/TheProject.html">world's first website</a> on August 6th, 1991. However, once again the original site was not archived, so we only have access to a 1992 copy. It doesn't look much different from the website on this page. It is as primitive as you can imagine for HTML: nothing more than a collection of paragraphs, headings, and hyperlinks.
                 <br/> <br/> Later that year in October of 1991, he published a document called <b>HTML Tags</b> that contained references to the first 18 HTML tags, including &lt;title&gt;, &lt;a&gt;, &lt;p&gt;, &lt;li&gt;, among others.
                 <br/> <br/> In November of 1991, the first <b>Hypertext Transfer Protocol</b> was released to the public as a part of the WWW service specification by Berners-Lee. Later dubbed <b>HTTP v0.9</b>, it was very simple, only using a GET method to fetch the name of the requested document.
                 <br/> <br /> Despite being such a pioneer to this point, Pei-Yuan Wei out of Berkley was the next to make a large strive in the history of the World Wide Web. He developed <b>ViolaWWW</b> in March of 1992, the first browser to support scripting, table rendering, and forms. This web browser also supported stylesheets in their first form, which allowed designers to control the websites appearance to an extent.
                 <br/> <br/> On July 18th, 1992 the next big step forward for the World Wide Web was upon us... <b>pictures!</b>  What you're looking at is the work of Silvano de Gennaro, an Italian computer scientist. It was one of the first photos uploaded to the World Wide Web, and of course, was also helped out by none other than Tim Berners-Lee.<br/><img height="270" width="346" src="https://www.webdesignmuseum.org/uploaded/web-design-history/les-horribles-cernettes.png"></img>
                 <br/> <br/> </p>

              </div>
          </div>
          {/* <img src={frameOne} /> */}
          </div>
        </div>
      );
}
}

export default Section1;
