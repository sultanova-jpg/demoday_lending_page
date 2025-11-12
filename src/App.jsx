import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Animals from './pages/Animals'
import About from './pages/About'
import Feed from './pages/Feed'

const App = () => {
  return (
    <div className=' bg-[#E3EFEA] w-bg-full  dark:bg-[#101715]'>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='animal' element={<Animals/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='feed' element={<Feed/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App