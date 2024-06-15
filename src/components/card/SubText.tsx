const SubText=({text}:{text:string})=>{
    const subText=text.slice(0,100);
    return(
        <div className="py-3">
            <p>{subText}</p>
        </div>
    )
}
export default SubText;