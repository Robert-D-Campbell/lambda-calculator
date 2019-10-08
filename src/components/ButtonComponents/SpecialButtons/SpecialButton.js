import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button onClick={() => props.display(props.btn)}>
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        {props.btn}
      </button>
    </>
  );
};
export default SpecialButton;
