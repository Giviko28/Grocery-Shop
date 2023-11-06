import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Home} from "./Home.jsx";
import {CartProvider} from "./context/CartContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
