import React, { useState } from "react";
import "./Orders.css";

function Orders() {
  const header = [
    "Pending",
    "Executed",
    "Tradebook",
    "Basket(7)",
    "Alerts(1)",
    "GTT",
    "SIP",
  ];

  const [activetab, setActivetab] = useState("Pending");

  return (
    <div>
      <div className="orders">
        <div className="header">
          <div className="header-left-part">
            {header.map((tab) => (
              <div
                className={`Inner-Header ${
                  activetab === tab ? "active" : "not-active"
                }`}
                onClick={() => setActivetab(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
          <div className="header-right-part">
            <div className="search">
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#1f1f1f"
                >
                  <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
                </svg>
              </div>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="body">
          <div className="body-img">
            <img
              src="https://web.gopocket.in/assets/no_data-97a05339.svg"
              alt=""
            />
          </div>
          <div className="body-text">No {activetab} orders Found</div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
