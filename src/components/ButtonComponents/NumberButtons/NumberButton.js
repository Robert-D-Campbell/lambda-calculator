import React from "react";

const NumberButton = props => {
  // console.log(props);
  // console.log(props.btn);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.btn}
    </>
  );
};
export default NumberButton;
