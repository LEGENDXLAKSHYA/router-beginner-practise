import About from './router/About'
import Cart from './router/Cart'
import Home from './router/Home'
import {NavLink,Routes,Route} from 'react-router';
function App() {
  
  function getStyle({isActive}){
    return{
      color: isActive ? 'red' : ''
    }

  }
  return(<>
  
  <NavLink to='/About' style={getStyle}>About</NavLink> <br/>
  <NavLink to='/Cart'style={getStyle}>Cart</NavLink> <br/>
  <NavLink to='/Home'style={getStyle}>Home</NavLink>
  
  <Routes>
    <Route path='/About' element={<About />} />
    <Route path='/Cart' element={<Cart />} />
    <Route path='/Home' element={<Home />} />
    

  </Routes>
  </>
  )
  
}

export default App;
