import {Route, Routes, Router} from '@solidjs/router'
import Home from './home/Home'


function App() {
return (
    <Router>
        <Routes>
            <Route path={'/'} component={Home}/>
        </Routes>
    </Router>
    
)
  
}
export default App
