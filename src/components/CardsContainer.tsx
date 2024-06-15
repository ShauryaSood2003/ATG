import Card1 from "./card/Card1";
import Card2 from "./card/Card2";
import Card3 from "./card/Card3";
import Group from "./group/Group";

import { data1, data2, data3 } from "../data/data"

const CardsConatiner=()=>{
    return (
        <div className="container">

        <div className="row my-3">

          <div className="col-lg-8 col-12">
              {
                data1.map((data)=>{
                  return(
                    <Card1 data={data}/>
                  )
                })
              }
              {
                data2.map(data=><Card2 data={data}/>)
              }
              {
                data3.map(data=><Card3 data={data}/>)
              }
          </div>

          <div className="col-lg-4 d-none d-lg-block">
            <Group/>
          </div>

        </div>
      
      </div>
    )
}
export default CardsConatiner;