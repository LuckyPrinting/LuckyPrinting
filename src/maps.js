import React from "react";

function Maps() {
  const flexWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    marginTop: "10%",
    overflow: "hidden",
  };

  const addressStyle = {
    fontSize: "1.5em",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100%",
  };

  const gridMaps = {
    width: "100%",
    height: "600px",
    overflow: "hidden",
  };

  return (
    <div>
      <div style={flexWrapper} className="maps">
        <h1>Locate Us!</h1>
        <b>
          <p style={addressStyle}>1 Roxy Square, 50 E Coast Road S428769</p>
        </b>
        <div style={gridStyle} className="GridMaps">
          <div className="grid1maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.140932112508!2d103.9043973!3d1.303884!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1872ffffffff%3A0xe543b30e38bba0d2!2sLucky%20Printing%20%26%20Stationery!5e0!3m2!1sen!2ssg!4v1719914792196!5m2!1sen!2ssg"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="grid2maps">
            <iframe
              style={gridMaps}
              src="https://www.google.com/maps/embed?pb=!4v1719511738352!6m8!1m7!1s_e9K_T1IYGr7D8VXluAtXA!2m2!1d1.303824235795248!2d103.9046160693781!3f187.04936435496995!4f-1.3516936065231988!5f0.7820865974627469"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map 2"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maps;
