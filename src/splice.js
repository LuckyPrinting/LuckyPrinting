import React, { useState, useEffect } from "react";
import SplineElement from "./spline";
const containerWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

const splineContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
};

function SpliceElement() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate an async loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 0); // Adjust time as needed to simulate loading delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <SplineElement />
    </div>
  );
}

export default SpliceElement;