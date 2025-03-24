import React, { useState } from "react";
import "./Positions.css";

function Positions() {
  const headervalue = ["All Positions", "F&O", "MCX"];
  const [activetab, setActivetab] = useState("All Positions");

  return (
    <div className="position">
      <div className="header">
        <div className="left-part">
          {headervalue.map((data) => (
            <div
              className={`${activetab === data ? "active" : ""}`}
              onClick={() => setActivetab(data)}
            >
              {data}
            </div>
          ))}
        </div>
        <div class="header-right-part">
          <div class="search">
            <div class="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#1f1f1f"
              >
                <path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z"></path>
              </svg>
            </div>
            <input placeholder="Search" type="text" />
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
  );
}

export default Positions;
