import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Global/Header"
import Footer from "./components/Global/Footer"
import Home2 from "./pages/Home2"
import Home3 from "./pages/Home3"
import Home4 from "./pages/Home4"
import About from "./pages/About"


function App() {

  return (
    <>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home2" element={<Home2/>}/>
        <Route path="/home3" element={<Home3/>}/>
        <Route path="/home4" element={<Home4/>}/>
        <Route path="/about" element={<About/>}/>

       </Routes>
       <Footer />
    </>
  )
}

export default App
