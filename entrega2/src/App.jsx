
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Navbar from "./componentes/Navbar"
import Main from "./componentes/Main"
import Footer from "./componentes/Footer"
import ProductDetail from "./componentes/ProductDetail"
import Productos from "./pages/Productos"
import Contacto from "./pages/Contacto"
import GiftCard from "./pages/GiftCard"




function App() {

  return (

    
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/productos" element={<Productos/>}/>
          <Route path="/Giftcard" element={<GiftCard/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    
   
  );
}


export default App
