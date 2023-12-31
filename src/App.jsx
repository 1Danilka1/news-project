import { Routes, Route } from 'react-router-dom'
import './App.css'
import SharedLoyaout from './components/SharedLayout/SharedLayout'
import { lazy } from 'react'

const Home = lazy(() => import("./pages/Home"));
const About = lazy (() => import("./pages/About"));
const Countries = lazy(() => import("./pages/Countries"))

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLoyaout />}>
        <Route index element={<Home />}/>
        <Route path='countries' element={<Countries />}/>
        <Route path='about' element={<About />}/>
      </Route>
    </Routes>
  )
}

export default App
