import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import "./navbar.css";

function Navbar() {
  const [activeButton, setActiveButton] = useState("current");
  const navigate = useNavigate();
  const location = useLocation();
  //update active buttons
  useEffect(() => {
    const path = location.pathname;

    if (path === "/currentsites") {
      setActiveButton("current");
    } else if (path === "/addwebsite") {
      setActiveButton("add");
    } else if (path === "/support") {
      setActiveButton("support");
    } else if (path === "/education") {
      setActiveButton("learnMore");
    }
  }, [location.pathname]);
  const handleNavigation = (button) => {
    setActiveButton(button);
    if (button === "current") {
      navigate("/currentsites");
    } else if (button === "add") {
      navigate("/addwebsite");
    } else if (button === "support") {
      navigate("/support");
    } else if (button === "learnMore") {
      navigate("/education");
    }
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white  m-3">
      <div className="flex items-center text-xl font-bold text-primary">
        <span className="icon">shield</span>
        <span className="ml-2">Scam Protection</span>
      </div>
      <div className="flex space-x-4">
        <Button
          variant={activeButton === "current" ? "default" : "ghost"}
          onClick={() => handleNavigation("current")}
          className={`rounded-full text-lg py-3 px-6 ${
            activeButton === "current"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : ""
          }`}
        >
          Website Voting
        </Button>
        <Button
          variant={activeButton === "add" ? "default" : "ghost"}
          onClick={() => handleNavigation("add")}
          className={`rounded-full text-lg py-3 px-6 ${
            activeButton === "add"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : ""
          }`}
        >
          Add Website
        </Button>
        <Button
          variant={activeButton === "support" ? "default" : "ghost"}
          onClick={() => handleNavigation("support")}
          className={`rounded-full text-lg py-3 px-6 ${
            activeButton === "support"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : ""
          }`}
        >
          Support
        </Button>
        <Button
          variant={activeButton === "learnMore" ? "default" : "ghost"}
          onClick={() => handleNavigation("learnMore")}
          className={`rounded-full text-lg py-3 px-6 ${
            activeButton === "learnMore"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : ""
          }`}
        >
          Learn More
        </Button>
      </div>
      <div className="w-[120px]" />
    </nav>
  );
}

export default Navbar;
