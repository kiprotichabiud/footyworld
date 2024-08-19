import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Blogs from './components/Blogs'
import Footer from './components/Footer'


function App() {

  return (

    <>
     <Navbar></Navbar>
     <main>
      <div id='home'><Home></Home></div>
      <div id='about'><About></About></div>
      <div id='services'><Services></Services></div>
      <div id='doctors'><Doctors></Doctors></div>
      <div id='blogs'><Blogs></Blogs></div>
     </main>
     <Footer></Footer>
    </>

  )
}

export default App