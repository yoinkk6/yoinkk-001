import Comp1 from "../comp/Comp1"
function Home() {
  return (
    <div class='bg-black h-[100vh] w-[100vw]'>
       <div class="w-[screen] h-[160px] text-white flex flex-col items-center">
        <div class="w-[70%] h-[50px] flex items-center justify-center text-xl font-bold mt-3">YOINKK EATS</div>
        <div class="w-[170px] h-[2px] bg-amber-300"></div>
        <div class="w-[70%] h-[25px] flex items-center justify-center">The Kutty Snack</div>
        <div class="w-[85%] h-[30px] flex mt-3">
            <input type="search" id="sear" class="w-full text-black h-full  p-2"></input></div>
       </div>
       <div class="w-[screen] h-[140px] bg-amber-300 flex items-center overflow-x-scroll mx-5">
        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2"></div>
        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2"></div>
        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2"></div>
        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2"></div>
        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2"></div>
        <div class="w-[80px] h-[80px] flex-shrink-0 rounded-[50%] bg-white m-2"></div>
       </div>
       <div class="w-[screen] h-[20px] flex justify-center items-center mt-3">
        <div class="w-[90%] h-[15px] bg-amber-300 flex items-center text-xs font-bold">Veg</div>
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