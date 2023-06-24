
import Sidebar from './components/Sidebar'
import HomePage from './pages/Homepage'
import Upload from './pages/Upload'
import Settings from './pages/Settings'
import Inbox from './pages/inbox'
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { useState,useEffect } from 'react'
// import Web3 from 'web3'
// import LandingPage from './pages/LandingPage'

function App() {
  
  

  return (
  <div className="flex flex-wrap bg-grey w-screen h-screen">
    <BrowserRouter>
    <Sidebar />
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
