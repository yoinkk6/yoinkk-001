import { For, Show, createSignal, useContext } from "solid-js"
import Comp from "../comp/Comp"
export const event = new Event('addToCart')
export const removeFromCart = new Event('remove');

const Home = () => {
  const [visible, setVisible] = createSignal(false);
  const [count, setCount] = createSignal(0)
  document.addEventListener('addToCart',() => {
      setVisible(true)
    setCount(prev => prev + 1)
  })
  document.addEventListener('remove', () => {
    setCount(prev => prev >0 ? prev - 1 : prev)
    if (count() <=0) setVisible(false)
  })
  return (
    <div class="h-screen w-screen overflow-y-scroll">
        <div class="h-[30%] w-full bg-red-400"></div>
        <div class="h-[20%] w-full bg-blue-400 flex overflow-x-scroll space-x-5 items-center">
            <For each={[1, 2,3 , 4, 5, 6, 7,8, 9, 0,1, 2, 3, 4]}>
                {(item, index) => <div class="h-[100px] aspect-square rounded-full bg-white flex-shrink-0"></div>}
            </For>
        </div>
        <div class="h-fit w-full bg-green-500 flex flex-col items-center space-y-5 pb-[20%]">
            <For each={[1, 2, 3, 4, 5]}>
                {(item, index) => <Comp/>}
            </For>
        </div>
        <Show when={visible()}>
          <div class="h-[10%] w-full bg-black absolute bottom-0 text-white">{count()}</div>
        </Show>
    </div>
  )
}

export default Home