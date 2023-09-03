import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bot from "../src/pages/Bots"

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
       
      <Route path="/bot" element={<Bot />} />
        
      
    </Routes>
  </BrowserRouter>
  )
}