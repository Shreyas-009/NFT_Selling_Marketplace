import React from 'react'
import Home from './pages/Home'
import SideNav from "./components/misceleneous/SideNav";
import TopBar from './components/misceleneous/TopBar';

const App = () => {
  return (
    <div className='w-full min-h-screen bg-dark_prime'>
      <SideNav/>
      <TopBar/>
      <Home/>
    </div>
  )
}

export default App