import React from "react";

class MySection extends React.Component {
    render() {
      return (
        <div className="section">
          <h3>{this.props.content}</h3>
        </div>
      );
    }
}

export default MySection;