import React from "react";

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

const h1Style = {
  marginTop: "3%",
  textAlign: "center",
};

function SpliceElement() {
  return (
    <div>
      <div style={containerWrapper}>
        <div style={splineContainer} className="splineContainer">
        <spline-viewer loading-anim-type="spinner-big-light" url="https://prod.spline.design/gEjwhpj6dNDva5Kh/scene.splinecode"></spline-viewer>        
        </div>
      </div>
    </div>
  );
}

export default SpliceElement;
