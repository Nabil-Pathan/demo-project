import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Global/Header"
import Footer from "./components/Global/Footer"
import Home2 from "./pages/Home2"


function App() {

  return (
    <>
       <Header/>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home2" element={<Home2/>}/>

       </Routes>
       <Footer />
    </>
  )
}

export default App
