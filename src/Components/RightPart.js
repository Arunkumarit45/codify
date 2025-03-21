import React from "react";
import "./RightPart.css";
function RightPart() {
  return (
    <div>
      <div className="first">
        <div class="header">Good afternoon, Rajamani</div>
        <div className="ec">
          <div className="container">
            <div class="title">Equity</div>
            <div className="details">
              <div className="value">
                <div className="price">5.98</div>
                <div className="sub-text">Available to trade</div>
              </div>
              <div className="mc">
                <div className="margin">
                  <div>Margin used</div>
                  <div> ₹ 0.02</div>
                </div>
                <div className="credits">
                  <div>Total Credits</div>
                  <div> ₹ 6.00</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container line-through">
            <div class="title">Commodities</div>
            <div className="details">
              <div className="value">
                <div className="price">0.00</div>
                <div className="sub-text">Available to trade</div>
              </div>
              <div className="mc">
                <div className="margin">
                  <div>Margin used</div>
                  <div> ₹ 0.00</div>
                </div>
                <div className="credits">
                  <div>Total Credits</div>
                  <div> ₹ 0.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="holdings">
          <div className="title">Holdings(3)</div>
          <div className="values">
            <div className="hv line">
              <div>Total Investment</div>
              <div>₹ 37.73</div>
            </div>
            <div className="hv line">
              <div>Current Value</div>
              <div>₹ 26.23</div>
            </div>
            <div className="hv line">
              <div>Today's P&L</div>
              <div>₹ 0.55 ( 2.14 % )</div>
            </div>
            <div className="hv ">
              <div>Net P&L</div>
              <div>₹ -11.50 (-30.48%)</div>
            </div>
          </div>
          <div className="flex-bar">
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
          <div className="radio-button">
            <div className="sub-radio-btn">
              <input type="radio" name="cv" checked={true} />
              <label htmlFor="cv">Current value</label>
            </div>
            <div className="sub-radio-btn">
              <input type="radio" name="iv" />
              <label htmlFor="iv">Investment value</label>
            </div>
            <div className="sub-radio-btn">
              <input type="radio" name="pnl" />
              <label htmlFor="pnl">PNL</label>
            </div>
          </div>
        </div>
      </div>
      <div className="second">
        <div className="container blue">
          <div className="ico">
            <img
              src="https://web.gopocket.in/assets/ipo-c1dd3d7e.svg"
              alt="IPO"
            />
          </div>
          <div className="title">IPO - Initial Public Offerings</div>
        </div>
        <div className="container purple">
          <div className="ico">
            <img
              src="https://web.gopocket.in/assets/sgb-5fc1e2e9.svg"
              alt="SGB"
            />
          </div>
          <div className="title">SGB - Sovereign Gold Bond</div>
        </div>
        <div className="container orange">
          <div className="ico">
            <img
              src="https://web.gopocket.in/assets/etf-9289ea62.svg"
              alt="ETF"
            />
          </div>
          <div className="title">ETF - Exchange Traded Funds</div>
        </div>
      </div>
      {/* <div className="third">
        <div className="title">Simplify Your Trading Journey</div>
        <div className="container">
          <div className="content">
            <img src="img1" alt="image1" />
            <div className="inner-title">Option Chain</div>
            <div className="content">
              Analyse option contracts, create custom baskets, and execute
              trades seamlessly.
            </div>
          </div>
          <div className="content">
            <img src="img2" alt="image2" />
            <div className="inner-title">Scalper</div>
            <div className="content">
              A fast-paced tool for quick, high frequency trades. Trade Faster ,
              Smarter and stay in control.
            </div>
          </div>
        </div>
      </div> */}
      <div className="four">
        <div className="container">
          <div className="head">
            <div className="title">Screeners</div>
            <div class="blue-color">More</div>
          </div>
          <div className="flex-items">
            <div className="flex-item">
              <div className="image">
                <img
                  src="https://web.gopocket.in/assets/top_gainers-12d81b68.svg"
                  alt="Top Gainers"
                />
              </div>
              <div className="txt">
                <div className="title">Top Gainers</div>
                <div className="cntnt">Invest in today's Gainers</div>
              </div>
            </div>
            <div className="flex-item">
              <div className="image">
                <img
                  src="https://web.gopocket.in/assets/top_losers-858d319f.svg"
                  alt="Top Loosers"
                />
              </div>
              <div className="txt">
                <div className="title">Top Losers</div>
                <div className="cntnt">Trade in today's Losers</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="head">
            <div className="title">Sectors</div>
            <div class="blue-color">More</div>
          </div>
          <div className="flex-items">
            <div className="flex-item">
              <div className="image">
                <img
                  src="https://web.gopocket.in/assets/it_industry-cc9dc1a0.svg"
                  alt="IT"
                />
              </div>
              <div className="txt">
                <div className="title">IT Industry</div>
                <div className="cntnt">Invest in IT stocks</div>
              </div>
            </div>
            <div className="flex-item">
              <div className="image">
                <img
                  src="https://web.gopocket.in/assets/automotive-9628d48f.svg"
                  alt="Auto-Mobile"
                />
              </div>
              <div className="txt">
                <div className="title">Automobile</div>
                <div className="cntnt">Invest in Auto stocks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="five">
        <div className="head">
          <div className="tit">Indices</div>
          <div class="blue-color"> All Indices</div>
        </div>
        <div className="flex-container">
          <div className="container">
            <div className="title">NIFTY 50</div>
            <div className="value">
              <div className="val">22834.30</div>
              <div className="greenval">325.55 (1.45%)</div>
            </div>
          </div>
          <div className="container">
            <div className="title">NIFTY BANK</div>
            <div className="value">
              <div className="val">49314.50</div>
              <div className="greenval">960.35 (1.99%)</div>
            </div>
          </div>
          <div className="container">
            <div className="title">INDIA VIX</div>
            <div className="value">
              <div className="val">13.21</div>
              <div className="redval">-0.21 (-1.56%)</div>
            </div>
          </div>
          <div className="container">
            <div className="title">FINNIFTY</div>
            <div className="value">
              <div className="val">23969.70</div>
              <div className="greenval">440.45 (1.87%)</div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        <button>
          <img
            src="https://web.gopocket.in/assets/feedback-d7e90f6d.svg"
            alt="Feed-Back"
          />
        </button>
      </div>
    </div>
  );
}

export default RightPart;
