import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const location = useLocation();
  const currentPath = location.pathname;

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
              />
            </div>
          </div>
          <div className="user">
            <p className="circle">RA</p>
          </div>
        </div>
      </div>

      <div className="full-list">
        <div className="first-half">
          <div className="containerr">
            <div>NIFTY 50</div>
            <div className="below">
              <div>22834.30</div>
              <div>(1.45%)</div>
            </div>
          </div>
          <div className="containerr">
            <div>IDEA-EQ</div>
            <div className="below">
              <div>7.10</div>
              <div>(2.31%)</div>
            </div>
          </div>
          <div>
            <img
              src="https://web.gopocket.in/assets/client-logo-e37e1491.svg"
              alt="Logo"
            />
          </div>
        </div>

        <div className="second-half">
          <p>
            <Link
              to="/dashboard"
              className={currentPath === "/dashboard" ? "active" : "nav-link"}
            >
              Dashboard
            </Link>
          </p>
          <p>
            <Link
              to="/order"
              className={currentPath === "/order" ? "active" : "nav-link"}
            >
              Orders
            </Link>
          </p>
          <p>
            <Link
              to="/holdings"
              className={currentPath === "/holdings" ? "active" : "nav-link"}
            >
              Holdings
            </Link>
          </p>
          <p>
            <Link
              to="/position"
              className={currentPath === "/position" ? "active" : "nav-link"}
            >
              Positions
            </Link>
          </p>
          <p>
            <Link
              to="/ipolist"
              className={currentPath === "/ipolist" ? "active" : "nav-link"}
            >
              IPO
            </Link>
          </p>
          <p>
            <Link
              to="/funds"
              className={currentPath === "/funds" ? "active" : "nav-link"}
            >
              Funds
            </Link>
          </p>
          <div className="vertical-bar"></div>
          <div className="user">
            <p className="circle">RA</p>
            <p>SKY32514</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
