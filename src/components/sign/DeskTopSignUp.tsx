import Button from "./Button"
import InputStyle from "./InputStyle"
import NameInput from "./NameInput"
import Title from "./Title"
import VerifyButton from "./VerifyButton"

const DeskTopSignUp=({ setToddle }: { setToddle: (item: any) => void })=>{
    return(
        <div className="d-flex flex-column">
            <Title text="Create Account"/>
            <NameInput/>
            <InputStyle placeholder="Email"/>
            <InputStyle placeholder="Password"/>
            <InputStyle placeholder="Confirm Password"/>
            <Button text="Create Account"/>
            <p className="d-block d-lg-none text-center">
                Don't have an account?
                <span className="text-primary ps-1" onClick={() => setToddle((toggle:any) => !toggle)}>Sign Up</span>
            </p>
            <VerifyButton text="Sign up with Facebook" link="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049579.jpg"/>
            <VerifyButton text="Sign up with Google" link="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png"/>
        </div>

    )
}
export default DeskTopSignUp;