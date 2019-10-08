import React, { useState } from "react";

const Display = props => {
  const [displayState, setDisplayState] = useState(0);
  console.log(props);
  return (
    <div className="display">
      {/* Display any props data here */}
      {displayState}
    </div>
  );
};

export default Display;
