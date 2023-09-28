import { createSignal } from "solid-js"

function Comp1(props) {
 
  const [count,setCount]=createSignal(0)
  
  return (
    <div class="w-[100%] h-[90px] bg-white mt-4 flex rounded-xl">
      <div class="h-full w-[60%]  bg-contain flex flex-col">
        
        <div class="w-full h-[70%] flex pl-[20%] items-center text-xl font-bold">{props.name}</div>
        <div class="w-full h-1/4 flex pl-[20%] items-center text-lg font-bold">{props.price}</div>
      </div>
      <div class="h-full w-[40%] flex justify-center  relative items-center">
        <div class={`h-full w-full`}>
          <img src={props.img}  class="object-cover mt-2 ml-5 rounded-md h-[80%] w-[70%]" />
        </div>
        <div class="h-[33%] w-[50%] absolute bg-black rounded-md bg-opacity-[0.8] 
        flex items-center justify-center text-amber-300 text-xs mt-[50%]"><button className="w-[33.33%] h-full" type="submit" onClick={()=>{
          props.cart.pop()
          setCount(props.totalItems)
        }}>-</button>
        <div>{count}</div>
        <button className="w-[33.33%] h-full" onClick={()=>{
          props.cart.push({})
          setCount(props.totalItems)
        }}>+</button></div>
        
      </div>
     
    </div>
  )
}

export default Comp1