import About from './router/About'
import Cart from './router/Cart'
import Home from './router/Home'
import {NavLink,Routes,Route} from 'react-router';
function App() {
  // to make the selected option become colored using NavLink
  function getStyle({isActive}){
    return{
      color: isActive ? 'red' : ''
    }

  }
  return(<>
  
  {/*  NavLink will help to create a link which works without reloading page    */}
  <NavLink to='/About' style={getStyle}>About</NavLink> <br/>
  <NavLink to='/Cart'style={getStyle}>Cart</NavLink> <br/>
  <NavLink to='/Home'style={getStyle}>Home</NavLink>
  
  {/* This is for providing route to the links created from NavLink in order to call our different components when any click is clicked*/}
  <Routes>
    <Route path='/About' element={<About />} />
    <Route path='/Cart' element={<Cart />} />
    <Route path='/Home' element={<Home />} />
    

  </Routes>
  </>
  )
  
}

export default App;
