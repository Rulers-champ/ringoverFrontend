import React from  'react'
import { BrowserRouter as Router,Routes,Route }from 'react-router-dom'
import Header from './components/Header'
import Contact from './Pages/Contacts'
import Journey from './Pages/Journey'
import Home from './Pages/Home'
import Store from './Pages/Store'
import Team from './Pages/Team'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App()
{
    return (

        <Router>
            <Header />
            <Routes>
              <Route path="/" exact element={<Home/>} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/store" element={<Store />} />
              <Route path="/team" element={<Team />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register/>} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
            
        </Router>

    );
}

export default App;