import Heading from "./Heading";
import Profile from "./Profile";
import Location from "./Location";
import Buttons from "./Buttons";

interface Card1Inter {
    emogi:string
    title:string
    topic:string
    name:string
    views:string
    link:string
    img:string
    date:string,
    location:string
    text:string
    type: string
}

const Card2=({data}:{data:Card1Inter})=>{
    return(
        <div className="border my-3 rounded">
            <img   style={{width:"100%",height:"300px"}} src={data.img} alt="mainImg"></img>
            <div className="p-4">
                <Heading emogi={data.emogi} title={data.title} topic={data.topic}/>
                <Location date={data.date} location={data.location}/>
                <Buttons text={data.text} type={data.type} />
                <Profile name={data.name} views={data.views} link={data.link}/>
            </div>
        </div>
    );
}
export default Card2;