import React from "react";
import "./Holdings.css";

function Holdings() {
  return (
    <div className="holding">
      <div className="header">Holdings (3)</div>

      <div className="body">
        <div className="body-img">
          <img
            src="https://web.gopocket.in/assets/no_data-97a05339.svg"
            alt=""
          />
        </div>
        <div className="body-text">No Holdings Found</div>
      </div>
    </div>
  );
}

export default Holdings;
