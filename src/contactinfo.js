import contactvideo from "./Assets/contactVideo.mp4";

function ContactInfo() {
  const containerWrapper = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    flexDirection: "column",
    marginTop: "10%",
    marginBottom: "3%",
    overflow: "hidden",
  };

  const bodyStyle = {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #051D40",
    background: "#091b39",
    color: "white",
    overflow: "hidden",
  };

  const videoStyle = {
    width: "25%",
    height: "100%",
    overflow: "hidden",
  };

  return (
    <div style={containerWrapper} className="contact">
      <h1>Contact Information</h1>
      <div style={bodyStyle} className="contactBody">
        <div>
          <p className="pstyle">Phone: 6440 5131</p>
          <p className="pstyle">Email: richard@lemotor.com.sg</p>
          <p className="pstyle">Richard Wong (Purchaser) 9769 2303</p>
          <p className="pstyle">Alan Sim(Sales) 9821 1739</p>
          <video style={videoStyle}>
            <source
              muted
              autoPlay
              playsInline
              loop
              src={contactvideo}
              alt="Contact Video"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
