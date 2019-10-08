import React, { useState } from "react";

const Display = props => {
  // console.log(props);
  return (
    <div className="display">
      {/* Display any props data here */}
      {props.display}
    </div>
  );
};

export default Display;
