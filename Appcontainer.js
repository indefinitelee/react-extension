import React from "react";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iframes: undefined
    };

    this.getiFrames = () => {
      this.setState({ iframes: window.frames.length });
    };
  }

  render() {
    return (
      <div>
        <p>sup</p>
        <button onClick={this.getiFrames}>Get iframes</button>
        {this.state.iframes || this.state.iframes === 0 ? (
          <h1>{"There are " + this.state.iframes + " iframes on the page"}</h1>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default AppContainer;
