import React, { Component } from "react";

class Hexagon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hexagonStyle: {
        fill: "white",
        stroke: "black",
        strokeWidth: "2"
        // shapeRendering: "geometricPrecision"
      },
      textStyle: {
        fill: "black"
      },
      isSelected: false,
      isMouseOver: false
    };
    this.toggleMark = this.toggleMark.bind(this);
    this.setTextColor = this.setTextColor.bind(this);
  }

  toggleMark = e => {
    this.setTextColor();
    // deselected -> mark and uncolor it
    if (this.state.isMouseOver && this.state.isSelected) {
      this.setState({
        hexagonStyle: {
          ...this.state.hexagonStyle,
          strokeWidth: "5",
          fill: this.props.currentColor
        },
        isSelected: false
      });
      // selected - > color and mark
    } else if (this.state.isMouseOver && !this.state.isSelected) {
      this.setState({
        hexagonStyle: {
          ...this.state.hexagonStyle,
          strokeWidth: "5",
          fill: this.props.currentColor
        },
        isSelected: true
      });
      // selected but not hovered -> keep marked (but decolor?)
    } else if (!this.state.isMouseOver && this.state.isSelected) {
      this.setState({
        hexagonStyle: {
          ...this.state.hexagonStyle,
          strokeWidth: "5"
        },
        isSelected: false
      });
      // not hovered and not selected
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

  setTextColor = e => {
    if (this.props.currentColor === "black") {
      this.setState({
        textStyle: {
          ...this.state.textStyle,
          fill: "white"
        }
      });
    } else {
      this.setState({
        textStyle: {
          ...this.state.textStyle,
          fill: "black"
        }
      });
    }
  };

  render() {
    return (
      <g
        transform={this.props.transform}
        onMouseEnter={this.trackMouseOver}
        onMouseLeave={this.trackMouseLeave}
        onClick={this.toggleMark}
      >
        <polygon
          id="hexagon"
          points="60,70 90,50 120,70 120,100 90,120 60,100"
          style={this.state.hexagonStyle}
        />
        <text
          text-anchor="middle"
          x="90"
          y="93"
          font-size="25"
          style={this.state.textStyle}
        >
          {this.props.number}
        </text>
      </g>
    );
  }
}

export default Hexagon;
