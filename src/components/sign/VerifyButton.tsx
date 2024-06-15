const VerifyButton=({text,link}:{text:string,link:string})=>{
    return(
        <div className="d-flex align-items-center justify-content-center border text-center p-2 my-2" style={{width: '100%'}}>
            <img className="rounded-circle" style={{width: 20, height: 20}} src={link} alt="logo"></img>
            <span className="ms-2">{text}</span>
        </div>

    )
}
export default VerifyButton;