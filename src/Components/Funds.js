import React from "react";
import "./Funds.css";
function Funds() {
  return (
    <div className="funds">
      <div className="header">
        <div>Equity</div>
      </div>

      <div className="body">
        <div className="body-img">
          <img
            src="https://web.gopocket.in/assets/no_data-97a05339.svg"
            alt=""
          />
        </div>
        <div className="body-text">No Equity orders Found</div>
      </div>
    </div>
  );
}

export default Funds;
