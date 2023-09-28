import { createSignal } from "solid-js"
import { puffs } from "../data/puffs"
function HeadComp(props) {
    const [Data,setData] = createSignal()
  return (
  
    
    <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 overflow-hidden"
    onClick={()=>(
        setData(()=>{props.name})
    )}>

        <img src={props.image} class="object-cover w-full h-full  rounded=[50%]" />

    </div>

   
 
   
  )
}

export default HeadComp