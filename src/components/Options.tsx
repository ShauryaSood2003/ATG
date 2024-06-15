import Topics from "./Topics";
import ButtonsF from "./ButtonsF";

const Options=()=>{
    return(
        <div className="container my-3 d-none d-lg-block">
            <div className="d-flex justify-content-between">
                <Topics/>
                <ButtonsF/>
            </div>
            <hr className="flex-grow-1 mx-3" />
        </div>
    )
}
export default Options;