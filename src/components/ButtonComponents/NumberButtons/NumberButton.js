import React from "react";

export default function NumberButton(props) {

  return (
    <button onClick ={() => props.setNumChar(props.buttonCharacters)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.buttonCharacters}
    </button>
  );

}
 
