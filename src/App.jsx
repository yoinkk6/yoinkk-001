import {Route, Routes} from '@solidjs/router'
import Home from './home/Home'
import HomeAlone from './home/home1'


function App() {
    return (
        <Routes>
            <Route path={'/'} component={HomeAlone}/>
        </Routes>
    )
}
export default App
