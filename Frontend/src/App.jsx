import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Result from './Pages/Result'
import BuyCredit from './Pages/BuyCredit'
import Navbar from './components/Navbar'
import { SignInButton } from '@clerk/clerk-react'

import Particles from './bg/Particles/Particles'
import Cursor from './ui/Cursor'
import Footer from './components/Footer'

  import { ToastContainer, toast } from 'react-toastify';
 

function App() {
  return (
    <div  className='min-h-screen bg-zinc-900
     font-gilro relative overflow-hidden overflow-y-hidden '>

    <ToastContainer position='top-right' />

  <div style={{ width: '100%', height: '100%', position: 'absolute', zIndex: '0' }}>

  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={300}
    particleSpread={10}
    speed={0.2}
    particleBaseSize={120}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>


<Cursor/>


      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buy' element={<BuyCredit/>}/>
      </Routes>

        <Footer/>


    </div>
  )
}

export default App