import { useState } from "react"
import DeskTopSignUp from "./DeskTopSignUp";
import DeskTopSignIn from "./DeskTopSignIn";
const DeskTop=()=>{
    const [toggle,setToddle]=useState(true);
    return(
        <div className="container">
            <div className="row">

                <div className="col">
                    {
                        toggle?
                        <DeskTopSignUp setToddle={setToddle}/>
                        :
                        <DeskTopSignIn setToddle={setToddle}/>
                    }
                </div>

                <div className="col d-flex flex-column justify-content-center align-items-center text-center d-none d-lg-block">
                    <div >
                        <p>Already have an account?<span className="text-primary ps-1" onClick={()=>{setToddle(!toggle)}}>Sign In</span></p>
                        <img className="my-3" src="https://dont-copy.netlify.app/assets/signup-OCG-APNN.svg"></img>
                        <p style={{fontSize:10}} className="text-secondary">By signing up, you agree to our Terms & conditions, Privacy policy</p>
                    </div>
                </div>

            </div>
        
        </div>
    )
}
export default DeskTop;