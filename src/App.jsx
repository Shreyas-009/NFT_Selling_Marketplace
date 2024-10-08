import React from 'react'
import Home from './pages/Home'
import SideNav from "./components/misceleneous/SideNav";
import Routers from "./routes/Routers";
import TopBar from './components/misceleneous/TopBar';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-dark_prime flex'>
      <SideNav/>
      <Routers />
    </div>
  )
}

export default App