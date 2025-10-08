import './App.css'
import NavHero from './NavHero';
import About from './About';
import Collection from './Collection';
import Contact from './Contact';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import BuyProduct from './BuyProduct';


function App() {


  return (
    <>


      <BrowserRouter>
        <Routes>

          <Route path='home' element={<NavHero />} />
          <Route path='about' element={<About />} />
          <Route path='Collection' element={<Collection />} />
          <Route path='buyproduct' element={<BuyProduct />} />
          <Route path='contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
