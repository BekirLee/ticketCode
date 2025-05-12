import React from "react";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { FaWallet, FaServicestack } from "react-icons/fa";

import "./Service.css";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <LiaShuttleVanSolid
          style={{ color: "green", height: "100%", fontSize: "46px" }}
        />
        <div className="servicesInfo">
          <p>Free shopping</p>
          <span>Capped at $319 per order</span>
        </div>
      </div>
      <div className="service">
        <FaWallet
          style={{ color: "green", height: "100%", fontSize: "46px" }}
        />
        <div className="servicesInfo">
          <p>Free shopping</p>
          <span>Capped at $319 per order</span>
        </div>
      </div>
      <div className="service">
        <FaServicestack
          style={{ color: "green", height: "100%", fontSize: "46px" }}
        />
        <div className="servicesInfo">
          <p>Free shopping</p>
          <span>Capped at $319 per order</span>
        </div>
      </div>
    </div>
  );
};

export default Services;
