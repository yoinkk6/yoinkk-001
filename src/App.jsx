import {Route, Routes} from '@solidjs/router'
import Home from './home/Home'


function App() {
    return (
        <Routes>
            <Route path={'/'} component={Home}/>
        </Routes>
    )
}
export default App
