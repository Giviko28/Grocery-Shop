import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {CartProvider} from "./context/CartContext.jsx";
import {Checkout} from "./pages/Checkout.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
