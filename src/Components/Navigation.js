import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="Header-Warapper">
      <div className="Mobile-Header">
        <div className="Menu-Wrapper">
          <div className="Menu-Icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#1f1f1f"
            >
              <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
            </svg>

            <div className="Mobile-Logo">
              <img
                src="https://web.gopocket.in/assets/client-logo-e37e1491.svg"
                alt="Logo"
              ></img>
            </div>
          </div>
          <div class="user">
            <p class="circle">RA</p>
          </div>
        </div>
      </div>
      <div class="full-list">
        <div class="first-half">
          <div class="containerr">
            <div>NIFTY 50</div>
            <div class="below">
              <div>22834.30</div>
              <div>(1.45%)</div>
            </div>
          </div>
          <div class="containerr">
            <div>IDEA-EQ</div>
            <div class="below">
              <div>7.10</div>
              <div>(2.31%)</div>
            </div>
          </div>
          <div>
            <img
              src="https://web.gopocket.in/assets/client-logo-e37e1491.svg"
              alt="Logo"
            ></img>
          </div>
        </div>

        <div class="second-half">
          <p className="active">Dashboard</p>
          <p>Orders</p>
          <p>Holdings</p>
          <p>Positions</p>
          <p>IPO</p>
          <p>Funds</p>
          <div class="vertical-bar"></div>
          <div class="user">
            <p class="circle">RA</p>
            <p>SKY32514</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
