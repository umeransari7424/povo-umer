import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaMediumM } from "react-icons/fa";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { BsTelegram , BsDiscord} from "react-icons/bs";
import {AiFillGithub} from "react-icons/ai";
// import Particles from "../Config/Heroparticle";

function Hero() {
  return (
    <div className="herobg position-relative">
      {/* <div className="position-absolute">

      <Particles />
      </div> */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h1>
              {" "}
              PLAY TO WIN <br /> REWARD ON HOLDING{" "}
            </h1>{" "}
            <br />
            <h2>
              Frictionless yield & liquidity generation protocol for game lover.
              Povo is deflationary in it's nature
            </h2>{" "}
            <br />
            <button type="button" className="btn btn-primary herobtn btn-lg mb-4">
              <img
                className="img-fluid"
                width={"30px"}
                src="Assets/pancakeslogo.png"
                alt="pencakelogo"
              />
              &nbsp; Trade on PancakeSwap
            </button>
            &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            <div>

            <button type="button" className="btn mb-4  whitebtn btn-lg">
              Whitepaper
            </button>
            </div>
            <div>
              <FaMediumM size={"40px"} />
              &nbsp;&nbsp;
              <BsTwitter size={"40px"} />
              <FaFacebookF size={"40px"} />
              <TiSocialYoutubeCircular size={"50px"} /> &nbsp;
              <BsTelegram size={"40px"} /> &nbsp; {" "}
              <AiFillGithub size={"40px"} />  &nbsp; {" "}
              <BsDiscord size={"40px"} />
              &nbsp;
            </div>{" "}
            <br />
            <div className="d-flex">
                <div>
                    <h5>Buying FEE is 5%</h5>
                    <ul>
                        <li>3% to buy back funds</li>
                        <li>1% Marketing and Development</li>
                        <li>1% Reflection to holders</li>
                        
                    </ul>
                </div>
                <div>
                    <h5>Selling FEE is 7%</h5>
                    <ul>
                        <li>4% to buy back funds</li>
                        <li>1% Marketing and Development</li>
                        <li>2% Reflection to holders</li>
                        
                    </ul>
                </div>
                
            </div>
            
          </div>
          <div className="col-md-6">
          <Carousel
            autoPlay="true"
            interval={3000}
            infiniteLoop="true"
            axis="horizontal"
            labels={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            showThumbs={false} >
              <div>
                <img className="img-fluid " src="Assets/1.png" alt="image1" style={{width:"300px"}} /> 
                
              </div>
              <div>
                <img className="img-fluid " src="Assets/2.png" alt="image2" style={{width:"300px"}} /> 
                
              </div>
              <div>
                <img className="img-fluid " src="Assets/3.png" alt="image3" style={{width:"300px"}} /> 
               
              </div>
              <div>
                <img className="img-fluid " src="Assets/4.png" alt="image4" style={{width:"300px"}} />
                
              </div>
              <div>
                <img className="img-fluid " src="Assets/5.png" alt="image5" style={{width:"300px"}} /> 
                
              </div>
              <div>
                <img className="img-fluid " src="Assets/6.png" alt="image6" style={{width:"300px"}} /> 
               
              </div>
              <div>
                <img className="img-fluid " src="Assets/7.png" alt="image7" style={{width:"300px"}} /> 
            
              </div>
            </Carousel> 
            <br /><br />
            <div className="input-group mb-3">
  <span className="input-group-text token1" ><b>Token Address</b></span>
  <label type="text" className="form-control token2"  > 0x2a2d03a47ae6220312337d1f094badcd1ee948cc</label>
</div> 
<div>
    <img className="img-fluid m-3" style={{width:"150px"}} src="Assets/certik.png" alt="Cerik" />
    <img className="img-fluid m-3" style={{width:"150px"}} src="Assets/pcs.png" alt="Cerik" />
    <img className="img-fluid m-3" style={{width:"150px"}} src="Assets/xt.png" alt="Cerik" />
</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
