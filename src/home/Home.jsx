import Comp1 from "../comp/Comp1"
import ToggleButton from "../comp/ToggleButton"
function Home() {
  return (
    <div class='bg-black h-[100vh] w-[100vw]'>
       <div class="w-[screen] h-[160px] text-white flex flex-col items-center">
        <div class="w-[70%] h-[50px] flex items-center justify-center text-xl font-bold mt-3">YOINKK EATS</div>
        <div class="w-[170px] h-[2px] bg-amber-300"></div>
        <div class="w-[70%] h-[25px] flex items-center justify-center text-yellow-300">The Kutty Snack</div>

            <div class="w-[90%] h-[38px] flex items-center mt-3">
            <input type="search" id="search" class="w-full text-black h-full rounded-2xl  pl-12" placeholder="search for items ..."></input></div>


       </div>
       
       <div class="w-screen h-[140px] bg-yellow-300 flex items-center overflow-x-scroll">

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/puffs/egg-puffs.jpg')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/mojito/blue-mojito.jpg')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/biryani/chicken-biryani.jpg')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/fried-rice/chicken-rice.jpg')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/noodles/chicken-noodles.jpg')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/hot-beverages/chai.jpg')] bg-cover"></div>
        
        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/milkshake/butterscotch-milkshake.jpg')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/dry-items/chicken-65.JPG')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/bread-omblet/bread-omblet.jpg')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/porota-roll/chicken-porota-roll.jpg')] bg-cover"></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/chapathi-roll/egg-chapathi-roll.jpg')] bg-cover "></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/maggi/Maggi-Noodles-veg.jpg')] bg-cover "></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/juice/Lime-Juice.jpg')] bg-cover "></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/norukals/garlic-Thattu-Vadai.jpg')] bg-cover "></div>

        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2 bg-[url('./src/assets/sandwich/chicken-sandwitch.jpg')] bg-cover "></div>
        

       </div>

       <div class="w-[screen] h-[24px] flex justify-center items-center mt-3">
        <div class="w-[100%] h-[100%] bg-yellow-300 flex items-center text-xs font-bold pl-5">Veg</div>
       </div>
       <div class="w-[screen] h-[50%] bg-black flex flex-col justify-center items-center">
        <div class="w-[90%] h-[18px] flex items-center text-amber-300 mt-2">Recommended Items</div>
        <div class="w-[90%] h-[100%] flex items-center  flex-col">
            <Comp1 />
            <Comp1 />
            <Comp1 />
        </div>       
       </div>
    </div>
  )
}

export default Home