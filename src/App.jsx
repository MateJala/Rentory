import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import FAQ from './pages/FAQ'

function App() {
    return (
        <Router>
            <Routes>
                <Route index path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/FAQ' element={<FAQ />}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
        </Router>
    )
}
export default App