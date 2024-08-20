import React from 'react';

function Signup() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <div className='cols-7'>
                    <img src='media/images/signup.png'/>
                </div>
                <div className='col-4 '>
                </div>
                <div className='col-4 mb-8 mt-6 '>
                    <h1>Signup now</h1>
                    <span className="text-muted">Or track your existing application.</span>
                    <form>
                        <label>Mobile Number:</label>
                        <input  type='number' placeholder='Enter your mobile number' maxLength={10}></input>
                        <p>You wil recieve an OTP on your number</p>
                        <button type='submit' className='p-2 btn btn-primary ' style={{width:"20%", margin:"0 auto"}}>Continue</button>
                    </form>
                </div>
            </div>
            <div className='row'></div>
        </div>
        
     );
}

export default Signup;