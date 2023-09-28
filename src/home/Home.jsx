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
       
      <div class="w-screen h-[90%] flex flex-col">
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
    </div>
  )
}

export default Home