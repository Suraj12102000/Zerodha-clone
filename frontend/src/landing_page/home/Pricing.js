import React from 'react';

function Pricing() {
    return (
        <div className='conatiner'>
          <div className='row'>
            <div className='col-4 '>
              <h1 className='mx-5'>Unbeatable pricing </h1>
              <p className='mx-5'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
              <a className="mx-5" href='' style={{textDecoration:"none"}}>See pricing<i className='fa fa-llong-arrow-right' aria-hidden="true"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>   
              <div className='row text-center'>
                <div className='col p-2 border'>
                  <h1 className='mb-3'>₹ 0</h1>
                  <p>Free equity edlivery and <br/>direct mutual funds</p>
                </div>
                <div className='col p-2 border'>
                <h1 className='mb-3'>₹ 20</h1>
                <p>Intraday and F&O</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Pricing;