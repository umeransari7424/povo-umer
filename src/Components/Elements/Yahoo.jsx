import React from "react";

function Yahoo() {
  return (
    <div className="yahoobg">
      <div className="container py-5">
        <div className="row">
        {/* <div className="col-md-1"></div> */}
          <div className="col-md-6">
            <div>
              <img
                className="img-fluid yahoo"
                src="Assets/yahoofinance.png"
                alt="Yahoo"
              />
            </div></div>
            <div className="col-md-6 text-end">
            <div>
              <img
                className="img-fluid benzinga"
                src="Assets/povobenzinga.png"
                alt="benzinga"
              />
            </div>
          </div>
          {/* <div className="col-md-1"></div> */}
        </div>
      </div>
    </div>
  );
}

export default Yahoo;
