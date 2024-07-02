import React from "react";
import SpliceElement from "./splice";
import GridContainer from "./gridContainer";
import Services from "./Services";
import Contactparent from "./contactParent";

function Homepage() {
  return (
    <div>
      <SpliceElement />
      <GridContainer />
      <Services />
      <Contactparent />
    </div>
  );
}

export default Homepage;
