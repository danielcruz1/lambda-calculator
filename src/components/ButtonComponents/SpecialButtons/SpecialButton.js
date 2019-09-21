import React from "react";
import {specials} from "../../../data";

const SpecialButton = () => {
  return (
    <div>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {
       specials.map(character => <SpecialButton character={character} /> )
       }
    </div>
  );
};

export default SpecialButton;