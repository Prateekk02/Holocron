import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Signin,Signup,Blog,Blogs } from './pages';



function App(){
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/blog/:id' element={<Blog/>} />
      </Routes>
    
    </BrowserRouter>
  </>
}


export default App;