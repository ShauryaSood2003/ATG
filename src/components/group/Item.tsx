const Item=({link,name}:{link:string,name:string})=>{
    return (
        <div className="d-flex justify-content-between p-2">
            <div className="d-flex align-items-center" >
                <img className="rounded-circle me-3" style={{width:40,height:40}} src={link} alt="profile"></img>
                <p className="fw-semibold mt-2">{name}</p>
            </div>
            <button className="rounded-pill border py-1 px-3">
                Follow
            </button>
        </div>
        
    )
}
export default Item;