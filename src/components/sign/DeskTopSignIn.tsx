import Button from "./Button"
import InputStyle from "./InputStyle"
import Title from "./Title"
import VerifyButton from "./VerifyButton"

const DeskTopSignIn = ({ setToddle }: { setToddle: (item: any) => void }) => {
    return (
      <div className="d-flex flex-column">
        <Title text="Sign In" />
        <InputStyle placeholder="Email" />
        <InputStyle placeholder="Password" />
        <InputStyle placeholder="Confirm Password" />
        <Button text="Sign In" />
        <p className="d-block d-lg-none text-center">
            Already have an account?
            <span className="text-primary ps-1" onClick={() => setToddle((toggle:any) => !toggle)}>Sign In</span>
        </p>
        <VerifyButton text="Sign up with Facebook" link="https://img.freepik.com/free-psd/3d-icon-social-media-app_23-2150049579.jpg" />
        <VerifyButton text="Sign up with Google" link="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" />
        <button className="btn d-none d-lg-block text-center forgot">Forgot Password?</button>
      </div>
    );
  };
  
export default DeskTopSignIn;