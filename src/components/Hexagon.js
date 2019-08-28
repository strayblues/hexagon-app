import React from "react";

const Hexagon = ({transform}) => {
    return (        
        <use
        xlinkHref="#hexagon"
        transform={transform}
        />
      );
}

export default Hexagon;