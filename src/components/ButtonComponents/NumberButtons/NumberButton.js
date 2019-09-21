import React from "react";

// const NumberButton = () => {
//   return (
//     <>
//       {/* Display a button element rendering the data being passed down from the parent container on props */}
//     </>
//   );
// };


const NumberButton = ({character}) => {
  let btnClass = "btn"
  if(character ===  "0") btnClass = "btn-lg"
  return <button className={btnClass}>{character}</button>
};

export default NumberButton; 