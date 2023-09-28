import Comp1 from "../comp/Comp1"
// import { createSignal } from "solid-js"
import { puffs } from "../data/puffs"
import { For } from "solid-js"
import { chickenRice } from "../data/chickenrice"
import { noodles } from "../data/noodles"
import { mojito } from "../data/mojito"
import { biryani } from "../data/biryani"
import { milkshake } from "../data/milkshake"
import { sandwich } from "../data/sandwich"
import { porotaRoll } from "../data/porotaroll"
import { thattuVadaiSet } from "../data/thattuVadaiSet"
import { juice } from "../data/juice"
import { hotBeverages } from "../data/hotBeverages"
import { maggi } from "../data/maggi"
import { chapathiRoll } from "../data/chapathiRoll"
import { breadOmblet } from "../data/breadOmblet"
import { dryItems } from "../data/dryItems"
import Puffs from "../comp/puffs"

function Home() {
  
  
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

       <div class="w-[screen] h-[6  0%] bg-black flex flex-col  items-center overflow-y-scroll">
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">PUFFS</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          {/* puffs */}
          <Puffs/>
        </div> 
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">SANDWICH</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={sandwich}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">FRIED RICE</div>
        <div class="w-[85%] h-[100%] flex items-center  flex-col  mb-4">
          <For each={chickenRice}> 
           {(chickenrice)=>{
            return(
              <Comp1 
              name={chickenrice.name}
              price={chickenrice.price}
              img={chickenrice.image}/>
            )
           }
           }
          </For> 
        </div>  
        {/* -------------------------------------------------------------- */}
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">NOODLES</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={noodles}> 
           {(noodle)=>{
            return(
              <Comp1 
              name={noodle.name}
              price={noodle.price}
              img={noodle.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">BIRYANI</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={biryani}> 
           {(bir)=>{
            return(
              <Comp1 
              name={bir.name}
              price={bir.price}
              img={bir.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">MAGGI</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={maggi}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">POROTTA ROLL</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={porotaRoll}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">CHAPATHI ROLL</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={chapathiRoll}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">BREAD OMBLET</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={breadOmblet}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">DRY ITEMS</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={dryItems}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        {/*  */}
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">TEA/COFFEE</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={hotBeverages}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">JUICE</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={juice}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">MOJITO</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={mojito}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        {/*  */}
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">MILKSHAKE</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={milkshake}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>
        {/*  */}
        <div class="w-[85%] h-[18px] flex items-center text-amber-300 mt-2 font-bold">THATTU VADAI SET</div>
        <div class="w-[85%] h-[200%] flex items-center  flex-col  mb-4">
          <For each={thattuVadaiSet}> 
           {(m)=>{
            return(
              <Comp1 
              name={m.name}
              price={m.price}
              img={m.image}/>
            )
           }
           }
          </For> 
        </div>

       </div>
    </div>
  )
}

export default Home