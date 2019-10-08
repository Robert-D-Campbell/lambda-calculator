import React from "react";

const OperatorButton = props => {
  // console.log(props);
  return (
    <>
      <button onClick={() => props.display(props.btn.char)}>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        {props.btn.value}
      </button>
    </>
  );
};

export default OperatorButton;
