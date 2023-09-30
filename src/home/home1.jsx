import Comp1 from "../comp/Comp1"
// import { createSignal } from "solid-js"

import { For, Show, createSignal } from "solid-js"

import { category } from "../data/category"


function HomeAlone() {
  
    const [bool,setBool]=createSignal(false)
    
  
  return (
    <div class='bg-black h-[100vh] w-[100vw] overflow-hidden'>
       <div class="w-[screen] h-[20%] text-white flex flex-col items-center">
        <div class="w-[70%] h-[50px] flex items-center justify-center text-xl font-bold mt-3">YOINKK EATS</div>
        <div class="w-[170px] h-[2px] bg-amber-300"></div>
        <div class="w-[70%] h-[25px] flex items-center justify-center text-yellow-300">The Kutty Snack</div>

            <div class="w-[90%] h-[30%] flex items-center mt-3">
            <input type="search" id="search" class="w-full text-black h-full rounded-2xl  pl-12" placeholder="search for items ..."></input></div>


       </div>
       
       <div class="w-screen h-[15%] bg-yellow-300 flex items-center overflow-x-scroll">

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/puffs/egg-puffs.jpg')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/mojito/blue-mojito.jpg')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/biryani/chicken-biryani.jpg')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/fried-rice/chicken-rice.jpg')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/noodles/chicken-noodles.jpg')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/hot-beverages/chai.jpg')] bg-cover"
        ></div>
        
        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/milkshake/butterscotch-milkshake.jpg')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/dry-items/chicken-65.JPG')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/bread-omblet/bread-omblet.jpg')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/porota-roll/chicken-porota-roll.jpg')] bg-cover"
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/chapathi-roll/egg-chapathi-roll.jpg')] bg-cover "
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/maggi/Maggi-Noodles-veg.jpg')] bg-cover "
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/juice/Lime-Juice.jpg')] bg-cover "
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/norukals/garlic-Thattu-Vadai.jpg')] bg-cover "
        ></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('/assets/sandwich/chicken-sandwitch.jpg')] bg-cover "
        ></div>
        

       </div>

       <div class="w-[screen] h-[57%] bg-black flex flex-col  items-center ">
       
        <div class="w-[85%] h-[100%] flex items-center  flex-col  mb-4 overflow-y-scroll">
          {/* puffs */}
          <For each={category}>
        {(mm)=>{
            return(
             <>
            <div class="w-[85%] h-[10%] flex items-center text-amber-300 mt-2 font-bold">PUFFS</div>

             <For each={mm}>{
                (m)=>{
                    return(

                        <>
                       
                        <Comp1 
                        name={m.name}
                        price={m.price}
                        img={m.image}
                        setBool={setBool}
                        bool={bool}
                        />
                        </>
                    )
                }
             }

             </For>
             </>
            )
        }
         }
        </For>
        </div> 
       
       

       </div>
       <Show when={bool()}>
       <div className="h-[50%] w-screen bg-yellow-300 ">

       </div>
       </Show>
       
    </div>
  )
}

export default HomeAlone