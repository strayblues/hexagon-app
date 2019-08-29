import React, { Component } from "react";

class Hexagon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexagonStyle: {
        fill: "none",
        stroke: "black",
        strokeWidth: "2"
      },
      isSelected: false,
      isMouseOver: false
    };
    this.toggleMark = this.toggleMark.bind(this);
  }

  toggleMark = e => {
    console.log("was clicked!");
    // deselected -> mark and uncolor it
    if (this.state.isMouseOver && this.state.isSelected) {
      this.setState({
        hexagonStyle: {
          ...this.state.hexagonStyle,
          strokeWidth: "5",
          fill: "white"
        },
        isSelected: false
      });
      // selected - > color and mark
    } else if (this.state.isMouseOver && !this.state.isSelected) {
      this.setState({
        hexagonStyle: {
          ...this.state.hexagonStyle,
          strokeWidth: "4",
          fill: "pink"
        },
        isSelected: true
      });
      // If hexagon selected but not hovered, keep marked but decolor
    } else if (!this.state.isMouseOver && this.state.isSelected) {
      this.setState({
        hexagonStyle: {
          ...this.state.hexagonStyle,
          strokeWidth: "5"
        },
        isSelected: false
      });
      // If not hovered and not selected
    } else if (!this.state.isMouseOver && !this.state.isSelected) {
      this.setState({
        hexagonStyle: { ...this.state.hexagonStyle, strokeWidth: "2" },
        isSelected: true
      });
    }
  };

  trackMouseOver = e => {
    this.setState({ isMouseOver: true });
  };

  trackMouseLeave = e => {
    this.setState({ isMouseOver: false });
  };

  render() {
    return (
      <polygon
        id="hexagon"
        points="50,25 100,25 125,68 100,111 50,111 25,68"
        style={this.state.hexagonStyle}
        transform={this.props.transform}
        onClick={this.toggleMark}
        onMouseEnter={this.trackMouseOver}
        onMouseLeave={this.trackMouseLeave}
      />
    );
  }
}

export default Hexagon;

// const Number = styled.p`
//   font-size: 8px;
// `;
