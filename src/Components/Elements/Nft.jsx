import React from "react";
// import ReactDOM from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// // import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function Nft() {
  return (
    <div className="nftbg">
      <div className="container text-center py-3">
        <div className="row py-3">
          <h1>
            {" "}
            <span>Povo</span> Exclusive NFT's
          </h1>
        </div>
        <div className="row py-3">
          <Carousel
          responsive={responsive}
            autoPlay="true"
            interval={2000}
            infinite="true"
            rewind={true}
            // axis="horizontal"
            // labels={false}
            arrows={false}
            // showStatus={false}
            // showIndicators={false}
            // showThumbs={false} 
            >
              <div>
                <img className="img-fluid " src="Assets/1.png" alt="image1" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src="Assets/2.png" alt="image2" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src="Assets/3.png" alt="image3" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src="Assets/4.png" alt="image4" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src="Assets/5.png" alt="image5" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src="Assets/6.png" alt="image6" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>
              <div>
                <img className="img-fluid " src="Assets/7.png" alt="image7" style={{width:"300px"}} /> <br /> <br />
                <button type="button" className="btn btn-secondary buy">Buy</button>
              </div>

            </Carousel>
           
            
        </div>
      </div>
    </div>
  );
}

export default Nft;
