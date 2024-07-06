import review from "./Assets/review.jpg";
import { ElfsightWidget } from "react-elfsight-widget";

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
    background: "#ED5107",
    color: "white",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "25%",
    height: "100%",
    overflow: "hidden",
    marginTop: "6%",
    borderRadius: "10%",
  };

  const h1Style = {
    marginTop: "10%",
    textAlign: "center",
    color: "black",
  };

  return (
    <div style={containerWrapper} className="contact">
      <ElfsightWidget widgetId="1a9c8981-3290-46df-97dd-1e570453e366" />
      <h1 style={h1Style}>Contact Information</h1>
      <div style={bodyStyle} className="contactBody">
        <div>
          <p className="pstyle">Phone (PayNow): 92291921</p>
          <p className="pstyle">Phone (PayLah): 92291921</p>
          <p className="pstyle">Email: lucky0288@gmail.com</p>
        </div>
      </div>
      <img
        src={review}
        alt="review"
        style={imageStyle}
        className="contactBody"
      />
    </div>
  );
}

export default ContactInfo;
