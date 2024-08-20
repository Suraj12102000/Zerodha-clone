import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div className='p-5' id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href=''>Track Tickets</a>
            </div>
            <div className='row p-5 m-3'>
                <div className='col-6 p-3'>
                    <h1>Search for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eq: how do I activate F&O, why is my order getting rejected...'></input><br/>
                    <a className='p-3 fs-5' href=''>Track account opening</a>
                    <a className='p-3 fs-5' href=''>Track segment activation</a>
                    <a className='p-3 fs-5' href=''>Intraday margins</a>
                    <a className='p-3 fs-5' href=''>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Featured</h1>
                    <ol>
                        <li style={{lineHeight:"2"}} className='fs-5'><a href=''>Surveillance measure on scrips - August 2024</a></li>
                        <li style={{lineHeight:"2"}} className='fs-5'><a href=''>Latest Intraday leverages and Square-off timings</a></li>
                    </ol> 
                </div>
            </div>
        </section>
     );
}

export default Hero;