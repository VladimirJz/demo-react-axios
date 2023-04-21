import { useState,useEffect } from 'react' 
import './App.css'
import Products from './components/Products/Products';
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  

  return (

    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/products/:id' element={ <ProductDetail/>}/>
        </Routes>
      </Router>
    </div>
    
    )
  
}

export default App
