import React from "react";
import "./LeftPart.css";

function LeftPart() {
  const data = [
    {
      name: "NIFTY 50",
      amount: "22834.30",
      type: "NSE",
      value: "325.55(1.45%)",
    },
    {
      name: "LAKSHYA-SM",
      amount: "338.5",
      type: "NSE",
      value: "0.00(0.00%)",
      greenvalue: "0.00 @ 0.00",
      redvalue: "0.00 @ 0.00",
      vol: "vol: 0.00",
    },
    {
      name: "RELIANCE-EQ",
      amount: "1238.80",
      type: "NSE",
      value: "-0.05(-0.00%)",
      greenvalue: "3.670 @ 1238.80",
      redvalue: "0.00 @ 0.00",
      vol: "vol: 1.5 Cr",
    },
    {
      name: "MRF-EQ",
      amount: "107839.20",
      type: "NSE",
      value: "2428.40(2.30%)",
      greenvalue: "0.00 @ 0.00",
      redvalue: "3 @ 107839.20",
      vol: "vol: 4928",
    },
    {
      name: "LFIC-BE",
      amount: "235,74",
      type: "NSE",
      value: "0.00(0.00%)",
      greenvalue: "0.00 @ 0.00",
      redvalue: "0.00 @ 0.00",
      vol: "vol: 0.00",
    },
    {
      name: "LAKSELEC",
      amount: "999.95",
      type: "BSE",
      value: "23.15(2.37%)",
      greenvalue: "0.00 @ 0.00",
      redvalue: "0.00 @ 0.00",
      vol: "vol: 8148",
    },
    {
      name: "IDEA-EQ",
      amount: "7.10",
      type: "NSE button 1",
      value: "0.16(2.31%)",
      greenvalue: "13,28,066 @ 7.10",
      redvalue: "0.00 @ 0.00",
      vol: "vol: 30.21 Cr",
    },
    {
      name: "IDEA 27th MAR FUT",
      amount: "7.16",
      type: "NFO",
      value: "0.19(2.73%)",
      greenvalue: "1,60,000 @ 7.16",
      redvalue: "5,60,000 @ 7.17",
      vol: "vol: 41.38 Cr",
    },
    {
      name: "GOLDBEES-EQ",
      amount: "74.13",
      type: "NSE",
      value: "0.60(0.82%)",
      greenvalue: "0.00 @ 0.00",
      redvalue: "16,737 @ 74.13",
      vol: "vol: 1.32 Cr",
    },
  ];

  return (
    <div className="full">
      <div class="header">
        <div class="watchlist">Watchlist</div>
        <div>Predefined list</div>
        <div>Option chain</div>
      </div>
      <div class="button">
        <div class="list">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
        </div>
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
            ></path>
          </svg>
        </div>
      </div>
      <div class="input">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1f1f1f"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search eg: INFY, NIFTY, CRUDEOIL etc., "
        />
        <div>9/30</div>
      </div>
      <div class="showdata">
        {data &&
          data.map((dat) => (
            <div key={dat.name}>
              <div className="data">
                <div className="firstline">
                  <div> {dat.name} </div>
                  <div> {dat.amount} </div>
                </div>
                <div className="secondline">
                  <div> {dat.type} </div>
                  <div> {dat.value} </div>
                </div>
                <div class="thirdline">
                  <div className="color-values">
                    <div className="green-val"> {dat.greenvalue} </div>
                    <div className="red-val"> {dat.redvalue} </div>
                  </div>
                  <div>{dat.vol}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default LeftPart;
