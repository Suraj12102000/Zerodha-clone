import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>
      <div
        className="row p-3 border-top  fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          ></img>
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.<br/></p>
            <p> He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).<br/></p>
            <p>Playing basketball is his zen.<br/></p> 
            <p>Connect on <a style={{textDecoration:"none"}} href=""> Homepage </a>/ <a style={{textDecoration:"none"}} href="">TradingQnA</a> /<a style={{textDecoration:"none"}} href="">Twitter</a> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
