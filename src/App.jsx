import { Routes, Route } from 'react-router-dom'
import './App.css'
import SharedLoyaout from './components/SharedLayout/SharedLayout'
import { lazy } from 'react'
import NewsDetails from './pages/NewsDetails';
import Home from './pages/Home';

const News = lazy(() => import("./pages/News"));
const About = lazy (() => import("./pages/About"));
const Countries = lazy(() => import("./pages/Countries"))

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLoyaout />}>
        <Route index element={<Home />}/>
        <Route path='news' element={<News />} />
        <Route path=':index' element={<NewsDetails />}/>        
        <Route path='countries' element={<Countries />}/>
        <Route path='about' element={<About />}/>
      </Route>
    </Routes>
  )
}

export default App
