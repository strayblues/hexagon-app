import React, { Component } from "react";
import styled from "styled-components";

// Components
import Button from "../common/Button";

// window.onbeforeunload = function() {
//   return "Are you sure that you want to leave this page?";
// };

class AlignDone extends Component {
  state = {
    currentColor: "white",
    currentStep: "Do a thing",
    taskIdx: 0,
    taskDisplayCompleted: false,
    tasks: [
      {
        image: {
          _id: "1",
          src: "board1.jpg"
        },
        description: [
          // "Line 1 of task 1",
          "Do a 2nd thing",
          "Do a 3rd thing",
          "Do a 4th thing"
        ],
        verifications: []
      },
      {
        image: {
          _id: "2",
          src: "board1.jpg"
        },
        description: [
          "Line 1 of task 2",
          "Line 2 of task 2",
          "Line 3 of task 2",
          "Line 4 of task 2"
        ],
        verifications: []
      }
    ]
  };

  handleClose = () => {
    window.open("about:blank", "_self");
    window.close();
  };

  render() {
    return (
      <Containter>
        <Instructions>
          <h2>Good job! You're almost done.</h2>
          <h2>Please copy your results and paste them in the MTurk screen.</h2>
        </Instructions>
        <DataToCopy>
          text in json format that the user can copy&paste (and cut?), but not
          edit
        </DataToCopy>
        <CloseButton onClick={this.handleClose}>Close</CloseButton>
      </Containter>
    );
  }
}

export default AlignDone;

const Containter = styled.div`
  display: flex;
  flex-direction: column;
`;

const Instructions = styled.div`
  color: #444;
`;

const DataToCopy = styled.textarea`
  width: 60vw;
  height: 40vh;
  align-self: center;
  margin-bottom: 2rem;
  color: darkblue;
  font-size: 16px;
  padding: 8px;
`;

const CloseButton = styled(Button)`
  color: white;
  width: 20%;
  background-color: orange;
`;
