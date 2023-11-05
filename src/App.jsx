import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Header} from "./components/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App