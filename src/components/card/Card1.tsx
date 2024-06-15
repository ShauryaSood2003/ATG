import Heading from "./Heading";
import Profile from "./Profile";
import SubText from "./SubText";

interface Card1Inter {
    emogi:string
    title:string
    topic:string
    text:string
    name:string
    views:string
    link:string,
    img:string
}

const Card1=({data}:{data:Card1Inter})=>{
    return(
        <div className="border my-2 rounded">
            <img style={{width:"100%",height:"300px"}} src={data.img} alt="mainImg"></img>
            <div className="p-4 " >
                <Heading emogi={data.emogi} title={data.title} topic={data.topic}/>
                <SubText text={data.text}/>
                <Profile name={data.name} views={data.views} link={data.link}/>
            </div>
        </div>
    );
}
export default Card1;