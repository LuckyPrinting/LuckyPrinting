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
    background: "#ED5107",
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
          <p className="pstyle">Phone (PayNow): 92291921</p>
          <p className="pstyle">Phone (PayLah): 92291921</p>
          <p className="pstyle">Email: lucky0288@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
