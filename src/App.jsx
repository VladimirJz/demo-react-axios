import { useState,useEffect } from 'react' 
import './App.css'
import Products from './components/Products/Products';
import FormDisabledDemo from './components/LoginForm/LoginForm'
import DefaultLayout from './layout/DefaultLayout'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  

  return (

    <div>
      <Router>
        <Routes>
          <Route path='/main' element={<DefaultLayout/>}/>
          <Route path='/' element={<FormDisabledDemo/>}/>
          <Route path='store' element={<Products/>}/>
          <Route path='store/products/:id' element={ <ProductDetail/>}/>
        </Routes>
      </Router>
    </div>
    
    )
  
}

export default App
