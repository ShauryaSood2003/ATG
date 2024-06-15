import SignToggle from "./SignToggle";
import Logo from "./head/Logo"
import Search from "./head/Search";

const Header=()=>{
    return(
        <div className="container my-3 d-none d-lg-block">
            <div className="row">
                <div className="col">
                    <Logo/>
                </div>
                <div className="col-7 d-flex justify-content-center">
                    <Search/>
                </div>
                <div className="col d-flex mt-2">
                    <p className="fw-bold pe-1">create Account.</p>
                    <SignToggle text="header"/>
                    
                </div>
            </div>
        </div>
    )
}
export default Header;