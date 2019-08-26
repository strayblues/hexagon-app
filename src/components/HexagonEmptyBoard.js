import React from "react";
import styled from "styled-components";

const HexagonEmptyBoard = () => {
  let hexagonStyle = {
    fill: "white",
    stroke: "black",
    "stroke-width": "2"
  };

  return (
    <Container>
      <svg viewBox="0 0 1350 770">
        <defs>
          <polygon
            id="hexagon"
            points="50,25 100,25 125,68 100,111 50,111 25,68"
            style={hexagonStyle}
          />
        </defs>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(i => {
          return [0, 2, 4, 6, 8, 10, 12, 14].map(j => {
            return (
              <>
                <use
                  xlinkHref="#hexagon"
                  transform={"translate(" + j * 75 + "," + i * 86 + ")"}
                  // style={{ fill: this.state.colorArray[i] }}
                />
                <use
                  xlinkHref="#hexagon"
                  transform={
                    "translate(" + (j + 1) * 75 + "," + (i * 86 + 43) + ")"
                  }
                />
              </>
            );
          });
        })}
        Sorry, your browser does not support inline SVG.
      </svg>
    </Container>
  );
};
//   return (
//     <Container>
//       {/* You can change the size of the hexagons by modifing the
//         values in the viewBox  */}
//       <div>
//         <svg viewBox="0 0 1350 770">
//           {/* The hexagon definitions, DO NOT modify */}
//           <defs>
//             <polygon
//               id="hexagon"
//               points="50,25 100,25 125,68 100,111 50,111 25,68"
//               style={hexagonStyle}
//             />
//           </defs>
//           {/* Building the hexagon columns */}
//           <>
//           {[1, 2, 3, 4, 5, 6, 7, 8].map((a, i) => (

//               [2, 4, 6].map((j) => (
//                 <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + j + "," + i * 86 + ")"}
//                 // style={{ fill: this.state.colorArray[i] }}
//               />
//               ))
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 2 * 75 + "," + i * 86 + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 4 * 75 + "," + i * 86 + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 6 * 75 + "," + i * 86 + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 8 * 75 + "," + i * 86 + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 10 * 75 + "," + i * 86 + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 12 * 75 + "," + i * 86 + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 14 * 75 + "," + i * 86 + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 75 + "," + (i * 86 + 43) + ")"}
//               />
// <use
//   xlinkHref="#hexagon"
//   transform={"translate(" + 3 * 75 + "," + (i * 86 + 43) + ")"}
// />

//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 5 * 75 + "," + (i * 86 + 43) + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 7 * 75 + "," + (i * 86 + 43) + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 9 * 75 + "," + (i * 86 + 43) + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 11 * 75 + "," + (i * 86 + 43) + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 13 * 75 + "," + (i * 86 + 43) + ")"}
//               />
//               <use
//                 xlinkHref="#hexagon"
//                 transform={"translate(" + 15 * 75 + "," + (i * 86 + 43) + ")"}
//               />
//             </>
//           ))}
//           Sorry, your browser does not support inline SVG.
//         </svg>
//       </div>
//     </Container>
//   );
// };

export default HexagonEmptyBoard;

const Container = styled.div`
  margin-left: 2em;
`;
