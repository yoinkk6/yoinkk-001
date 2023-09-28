import Comp1 from "../comp/Comp1"
// import { createSignal } from "solid-js"
import { puffs } from "../data/puffs"
import { photo } from "../data/photo"
import HeadComp from "../comp/HeadComp"
import { For, Show } from "solid-js"

function Home() {
  // const[Data,setData]=createSignal("puffs")
  return (
    <div class='bg-black h-[100vh] w-[100vw] '>
       <div class="w-[screen] h-[160px] text-white flex flex-col items-center">
        <div class="w-[70%] h-[50px] flex items-center justify-center text-xl font-bold mt-3">YOINKK EATS</div>
        <div class="w-[170px] h-[2px] bg-amber-300"></div>
        <div class="w-[70%] h-[25px] flex items-center justify-center text-yellow-300">The Kutty Snack</div>

            <div class="w-[90%] h-[38px] flex items-center mt-3">
            <input type="search" id="search" class="w-full text-black h-full rounded-2xl  pl-12" placeholder="search for items ..."></input></div>
       </div>
       
       <div class="w-screen h-[140px] bg-yellow-300 flex items-center overflow-x-scroll">
       <For each={photo}> 
          {(photo) => (
            <Show when={photo} >
            <HeadComp 
            image={photo.image}
            name={photo.name}/>
            </Show>
          )}     
        </For> 
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

export default Home