import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Signin,Signup,Blog,Blogs,Homepage,Publish} from './pages';



function App(){
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}  />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blog/:id' element={<Blog/>} />
        <Route path='/publish' element={<Publish/>} />
      </Routes>
    
    </BrowserRouter>
  </>
}


export default App;