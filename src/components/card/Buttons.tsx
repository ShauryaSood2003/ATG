const Buttons=({text,type}:{text:string,type:string})=>{
    return(
        <button style={{width:"100%"}} className={`btn btn-outline-light border border-2 fw-semibold my-3 ${(type=="danger"?"text-danger":"text-success")}`} type="button">{text}</button>
    )
}
export default Buttons;