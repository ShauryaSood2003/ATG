const Heading=({emogi,title,topic}:{emogi:string,title:string,topic:string})=>{
    return(
        <div>
            <div className="fs-3 d-flex text-white fw-bold">
                <p className="pe-2">{emogi}</p>
                <p>{topic}</p>
            </div>
            <div className="d-flex justify-content-between">
                <h1 className="fs-3">{title}</h1>
                <Dots/>
            </div>
        </div>
    )
}
const Dots=()=>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="30" height="30" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
  </svg>
  
}
export default Heading;