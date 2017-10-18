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
        <button onClick={this.getiFrames}>get iframes</button>
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
