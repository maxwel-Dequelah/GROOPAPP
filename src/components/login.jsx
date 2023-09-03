import { useEffect, useState } from "react";
import logo2 from '../media/logo2.png'

import './css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo1 from "./logo1";



function LoginPage(){


    const [userName, setUserName]=useState('')
    const [pasword, setPasword]=useState('')

    const handleSubmit = ()=>{
        // InputValidation
        
    }

    return( 
        <section className="vh-100">
        
        <div className="container-fluid">

        {/* Adding the Logo Component */}
       
        <Logo1 className='d-block'/>

        {/* addint the other Components */}
          <div className="row w-100 vh-100">
            <div className="col-sm-6 text-black">
      
              <div 
                className="d-flex align-items-center h-custom-1 
                        px-5 ms-xl-12 mt-5 pt-5 pt-xl-0 mt-xl-n5"
                        style={{marginTop: '0px'}}>
      
                <form style={{width: "30rem!important"}}>
      
                  <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>
      
                  <div className="form-outline mb-4">
                    <input type="email" 
                        id="EmailField" 
                        className="form-control form-control-lg" 
                        onChange={(e)=>setUserName(e.target.value)}
                        />
                    <label className="form-label" htmlFor="EmailField">
                        {userName.length > 0? userName : 'Email address'}
                        </label>
                  </div>
      
                  <div className="form-outline mb-4">
                    <input type="password" id="passwordField" 
                        className="form-control 
                        form-control-lg" 
                        onChange={(e)=>{
                            setPasword(e.target.value)
                        }}/>
                    <label className="form-label" htmlFor="passwordField">Password</label>
                  </div>
      
                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg btn-block" 
                        type="submit"
                        onClick={e=>e.preventDefault()}>Login
                    </button>
                  </div>
      
                  <p className="small mb-5 pb-lg-2"
                      style={{marginBottom:"0px!important"}}>
                    <a className="text-muted" href="#">Forgot password?
                    </a>
                   </p>
                  <p>Want To join? <a href="#!" 
                    className="link-info"
                    style={{marginTop:"0px"}}
                    >Submit Registration Request 
                    </a> here
                  </p>
      
                </form>
      
              </div>
      
            </div>

            {/* the side Logo */}
            <div className="col-sm-6 py-3 d-none d-sm-block center-block">
              <img src={logo2} 
              alt="Login image" className="w-50 vh-50" 
              style={{backgroundColor:'none', objectFit: 'cover', objectPosition: 'left', filter: "contrast(170%)"}}/>
            </div>
          </div>
        </div>
        </section>


    )
    
    
};


export default LoginPage;