import { createSignal } from "solid-js"
import { createStore } from "solid-js/store"
import { event, removeFromCart } from "../home/Home"

const Comp = () => {
  const [count, setCount] = createSignal(0);
  const [data, setData] = createStore([])
  const add = () => {
    if (count() >= 0) {
      setCount(prev => prev + 1)
      document.dispatchEvent(event)
    }
  }
  const remove = () => {
    if (count() > 0) {
      setCount(prev => prev > 0 ? prev - 1 : prev)
      document.dispatchEvent(removeFromCart);
    }
  }
  return (
    <div class="h-[100px] w-[90%] bg-white text-2xl flex justify-around items-center">
      <div onClick={remove} class="h-[100%] w-[30%]">-</div>
      <div class="h-[100%] w-[30%]">{count()}</div>
      <div onClick={add} class="h-[100%] w-[30%]">+</div>
    </div>
  )
}

export default Comp