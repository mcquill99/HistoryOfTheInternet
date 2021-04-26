import React from "react";

class Section3 extends React.Component {
    render() {
      return (
        <div className="section">
          <h3>{this.props.content}</h3>
        </div>
      );
    }
}

export default Section3;