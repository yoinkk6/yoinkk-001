import { createSignal } from "solid-js"
import { puffs } from "../data/puffs"
function HeadComp(props) {
    const [Data,setData] = createSignal()
  return (
    <div class="w-screen h-[100%] flex flex-col">
    <div class="w-screen h-[140px] bg-yellow-300 flex items-center overflow-x-scroll">
    <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 overflow-hidden"
    onClick={()=>(
        setData(()=>{props.name})
    )}>

        <img src={props.image} class="object-cover w-full h-full  rounded=[50%]" />
        console.log(setData())
    </div>
    </div>
    <div class="w-[screen] h-[24px] flex justify-center items-center mt-3">
        <div class="w-[100%] h-[100%] bg-yellow-300 flex items-center text-xs font-bold pl-5">Veg</div>
       </div>

       <div class="w-[screen] h-[50%] bg-black flex flex-col justify-center items-center">
        <div class="w-[90%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">Recommended Items</div>
        <div class="w-[85%] h-[100%] flex items-center  flex-col overflow-y-scroll mb-4">
          <For each={()=>setData()}> 
          {(setData) => (
            <Show when={(()=>{setData.name})} >
            <Comp1 
            name={setData.name}
            price={setData.price}
            img={setData.image}/>
            </Show>
          )}     
          </For> 
        </div>       
       </div>
    </div>
   
  )
}

export default HeadComp