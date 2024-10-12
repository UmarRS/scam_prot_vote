import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [activeButton, setActiveButton] = useState("current");
  const navigate = useNavigate();

  const handleNavigation = (button) => {
    setActiveButton(button);
    if (button === "current") {
      navigate("/currentsites");
    } else if (button === "add") {
      navigate("/addwebsite");
    }
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-white shadow-sm">
      <div className="text-lg font-bold text-primary">Scam Protection</div>
      <div className="flex space-x-2">
        <Button
          variant={activeButton === "current" ? "default" : "ghost"}
          onClick={() => handleNavigation("current")}
          className={`rounded-full ${
            activeButton === "current"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : ""
          }`}
        >
          Current Websites
        </Button>
        <Button
          variant={activeButton === "add" ? "default" : "ghost"}
          onClick={() => handleNavigation("add")}
          className={`rounded-full ${
            activeButton === "add"
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : ""
          }`}
        >
          Add Website
        </Button>
      </div>
      <div className="w-[120px]" /> {/* Spacer to balance the layout */}
    </nav>
  );
}

export default Navbar;
