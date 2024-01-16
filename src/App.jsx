import { Routes, Route } from 'react-router-dom'
import './App.css'
import SharedLoyaout from './components/SharedLayout/SharedLayout'
import { lazy } from 'react'

const News = lazy(() => import("./pages/News"));
const About = lazy (() => import("./pages/About"));
const Countries = lazy(() => import("./pages/Countries"))
const NewsDetails = lazy(() => import("./pages/NewsDetails"))

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLoyaout />}>
        <Route index element={<News />} />
        <Route path=':id' element={<NewsDetails />}/>        
        <Route path='countries' element={<Countries />}/>
        <Route path='about' element={<About />}/>
      </Route>
    </Routes>
  )
}

export default App
