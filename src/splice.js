import React, { useState, useEffect } from "react";

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
      <div style={containerWrapper}>
        {isLoaded && (
          <div style={splineContainer} className="splineContainer">
            <spline-viewer loading-anim-type="spinner-big-dark" url="https://prod.spline.design/gEjwhpj6dNDva5Kh/scene.splinecode"></spline-viewer>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpliceElement;