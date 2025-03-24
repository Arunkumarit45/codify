import React from "react";
import "./Ipo.css";
function Ipo() {
  return (
    <div className="ipo">
      <div className="header">
        <div className="dash">Dashboard</div>
        <div className="symbol">
          <svg
            fill="#753ED7"
            viewBox="0 0 330 330"
            width="8"
            height="8"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "rotate(270deg)" }}
          >
            <g>
              <path d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path>
            </g>
          </svg>
        </div>
        <div className="abbr"> IPO - Initial Public Offerings</div>
      </div>

      <div className="body">
        <div className="body-img">
          <img
            src="https://web.gopocket.in/assets/no_data-97a05339.svg"
            alt=""
          />
        </div>
        <div className="body-text">
          No IPO - Initial Public Offerings orders Found
        </div>
      </div>
    </div>
  );
}

export default Ipo;
