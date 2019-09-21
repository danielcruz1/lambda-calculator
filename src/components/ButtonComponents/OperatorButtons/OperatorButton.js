import React from "react";

// const OperatorButton = () => {
//   return (
//     <>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//     </>
//   );
// };

const OperatorButton = (props) => <button className="btn"> {props.character} </button>;
  
export default OperatorButton;
