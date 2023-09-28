import { puffs } from "../data/puffs"
import Comp1 from "./Comp1"
import { createSignal } from "solid-js"

const cart=[]

export default function Puffs(){
    const [cartItems,setCartItems]=createSignal(cart)
  
  const totalItems=()=>cartItems().length
 
    return(
        <For each={puffs}> 
           {(puff)=>{
            return(
                <>
              <Comp1 
              name={puff.name}
              price={puff.price}
              img={puff.image}
              totalItems={totalItems()}
              cart={cart}
              />
              </>
            )
           }
           }
          </For> 
    )
}