import React from 'react'

function Header() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <img src="Assets/povologo.png" width={"40px"} alt="PorkSwap" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>{" "}
              &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Staking
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Governance
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Tokenaoic
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Roadmap
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Rugpul
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  FAQ
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <button className="btn nav-btn nav-link" aria-current="page" href="/">
                  Connent Wallet
                </button>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header