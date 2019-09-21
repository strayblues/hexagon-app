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

  handleCopy = () => {
    /* Get the text field */
    let copyText = document.getElementById("myInput");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/

    /* Copy the text inside the text field */
    document.execCommand("copy");

    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  };

  render() {
    return (
      <Containter>
        <Instructions>
          <h2>Good job! You're almost done.</h2>
          <h2>Please copy your results and paste them in the MTurk screen.</h2>
        </Instructions>
        {/* <CopyToClipboard text={this.state.response}>
           <p className="copy-clipboard">Copy to clipboard</p>
        </CopyToClipboard> */}
        <CopyButton onClick={this.handleCopy}>Copy</CopyButton>
        <DataToCopy>
          text in json format that the user can copy to clipbord. Prevent other
          actions like Edit.
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

const CopyButton = styled(CloseButton)`
  margin: 2em 0;
  background-color: blue;
`;
