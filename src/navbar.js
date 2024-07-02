import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import topbanner from "./Assets/topBanner.png";
import Homepage from "./homepage"; // Import the Homepage component
import Services from "./Services"; // Import the Services component
import ParentContact from "./contactParent";

const ChatWithJasonBot = () => <div>Chat with JasonBot Page</div>;

const bodyStyle = {
  padding: "none",
  margin: "none",
  width: "100%",
};

const NavBar = () => {
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ED5107",
    padding: "1% 0",
    width: "100%",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  };

  const logoStyle = {
    width: "20%",
  };

  return (
    <Router basename="/">
      <div style={bodyStyle}>
        <div
          style={{
            backgroundColor: "#fff",
            textAlign: "center",
            padding: "20px 0",
          }}
        >
          <img
            src={topbanner}
            alt="Logo"
            style={logoStyle}
            className="topbanner"
          />
        </div>
        <div style={navBarStyle}>
          <Link to="/" style={linkStyle} className="navlinks">
            Home
          </Link>
          <a
            href="https://chatgpt.com/g/g-h6SP5MWR4-lucky-bot"
            style={linkStyle}
            className="navlinks"
          >
            Chat with our AI bot
          </a>
          <Link to="/Services" style={linkStyle} className="navlinks">
            Services
          </Link>
          <Link to="/contact" style={linkStyle} className="navlinks">
            Contact
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/LuckyPrinting" element={<Homepage />} />
          <Route path="/chat-with-jasonbot" element={<ChatWithJasonBot />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact" element={<ParentContact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default NavBar;
