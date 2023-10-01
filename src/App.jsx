import { Route, Routes } from "react-router-dom"
import MyNavbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"


function App() {

  return (
    <div className="App">
  <MyNavbar/>
  <Routes>
    <Route path="/" element={<Products/>} />
    <Route path="/cart" element={<Cart/>} />
  </Routes>
    </div>
  )
}

export default App
