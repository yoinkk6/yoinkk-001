import {Route, Routes, Router} from '@solidjs/router'
import Home from './home/Home'


function App() {
    // <Router>
    //     <Routes>
    //         <Route path={'/'} component={Home}/>
    //     </Routes>
    // </Router>
    <div className='h-[100vh] w-[100vw]'>
        <Home />
    </div>

  
}
export default App
