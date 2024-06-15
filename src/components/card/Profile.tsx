const Profile=({name,views,link}:{name:string,views:string,link:string})=>{
    return(
        <div className="d-flex justify-content-between align-items-center" style={{width:"100%"}}>
            <div className="d-flex align-items-center" style={{width:"100%"}}>
                <img className="rounded-circle me-3" style={{width:45, height:45}} src={link} alt="profile" />

                <div className="d-lg-flex align-items-center justify-content-between me-2 mt-2" style={{width: "100%"}}>
                    <p className="fw-semibold mt-2">{name}</p>
                    <div className="d-flex">
                        <Eye />
                        <p className="fw-semibold  ms-1">{views}</p>
                    </div>
                </div>
                
                <button className="btn btn-secondary ms-3">
                    <Share />
                </button>
            </div>
        </div>
    )
}
const Eye=()=>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg> 
}
const Share=()=>{
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
  </svg>
  
}
export default Profile;