import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

export default function Operators(props) {
  // STEP 2 - add the imported data to state
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="operator-btn-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

      operatorState.map((btn, opIndex) => (
        <OperatorButton display={props.display} key={opIndex} btn={btn} />
      ))}
    </div>
  );
}
