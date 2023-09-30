import { createSignal } from "solid-js"
import Home from "./home/Home"

const App = () => {
  const [] = createSignal(0)
  return (
    <Home/>
  )
}

export default App