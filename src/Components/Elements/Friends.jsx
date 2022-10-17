import React from 'react'

function Friends() {
  return (
    <div className='friendbg'>
        <div className="container text-center py-5">
            <div className="row">
                <h1>Friends of <span className='povo'>Povo</span> </h1>
            </div>
            <div className="row pt-5">
                <div className="col text-start pt-2">
                    <img className='img-fluid' src="Assets/coinmarket.png" alt="Coin Market" />
                </div>
                <div className="col text-start ">
                    <img className='img-fluid' src="Assets/coingecko.svg" alt="Coin Market" />
                </div>
                <div className="col text-start">
                    <img className='img-fluid' src="Assets/bcnscane.png" alt="Coin Market" />
                </div>
                <div className="col text-start pb-3">
                    <img className='img-fluid' src="Assets/pencake.png" alt="Coin Market" />
                </div>

            </div>
            <div className="row py-1">
            <div className="col text-start">
                    <img className='img-fluid' src="Assets/cointoplist.png" alt="Coin Market" />
                </div>
                <div className="col text-start pb-3">
                    <img className='img-fluid' src="Assets/coinhunter.png" alt="Coin Market" />
                </div>

            </div>
            <div className="row">
            <div className="col text-start ">
                    <img className='img-fluid' src="Assets/gemfinder.png" alt="Coin Market" />
                </div>
                <div className="col text-start">
                    <img className='img-fluid' src="Assets/coinspiner.png" alt="Coin Market" />
                </div>
                <div className="col text-start pb-3">
                    <img className='img-fluid' src="Assets/coinscop.png" alt="Coin Market" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Friends