function Comp1(props) {
  return (
    <div class="w-[100%] h-[90px] bg-white mt-4 flex rounded-xl">
      <div class="h-full w-[60%]  bg-contain flex flex-col">
        <div class="w-full h-1/4 flex items-end"><div class="h-[60%] w-[6%] bg-red-400 ml-[8%]"></div></div>
        <div class="w-full h-1/2 flex pl-[28%] items-center text-xl">{props.name}</div>
        <div class="w-full h-1/4 flex pl-[28%] items-center text-xs">{props.price}</div>
      </div>
      <div class="h-full w-[40%] flex justify-center  relative items-center">
        <div class={`h-[70%] w-[75%] bg-[url(${props.img})] bg-cover rounded-lg`}></div>
        <div class="h-[33%] w-[50%] absolute bg-black rounded-md bg-opacity-[0.8] 
        flex items-center justify-center text-amber-300 text-xs mt-[35%]">Add</div>
      </div>
    </div>
  )
}

export default Comp1