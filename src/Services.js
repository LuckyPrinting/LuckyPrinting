import React from "react";

function Services() {
  const h1Style = {
    marginTop: "3%",
    textAlign: "center",
    color: "black",
  };

  const containerWrapper = {
    marginTop: "3%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
  };

  return (
    <>
      <div style={containerWrapper}>
        <h1 style={h1Style}>Current Listings</h1>
        <div
          className="canva-embed"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            paddingTop: "56.2500%",
            paddingBottom: 0,
            marginTop: "1.6em",
          }}
        >
          <iframe
            loading="lazy"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              border: "none",
              padding: 0,
              margin: 0,
            }}
            src="https://www.canva.com/design/DAGJKiHF-SY/lTwJ6bGp3YLvXUVVLZD_pg/view?embed"
            title="Car Listings"
            allowFullScreen
            allow="fullscreen"
          ></iframe>
        </div>
        <a
          href="https://www.canva.com/design/DAGJKiHF-SY/lTwJ6bGp3YLvXUVVLZD_pg/view?utm_content=DAGJKiHF-SY&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </>
  );
}

export default Services;
