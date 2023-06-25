
//import Sidebar from './components/Sidebar'
import HomePage from './pages/Homepage'
import Upload from './pages/Upload'
import Settings from './pages/Settings'
import Inbox from './pages/inbox'
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { useState,useEffect } from 'react'
// import Web3 from 'web3'
// import LandingPage from './pages/LandingPage'

function App() {
  
//   const btnhandler = () => {
  
//     // Asking if metamask is already present or not
//     if (window.ethereum) {
  
//       // res[0] for fetching a first wallet
//       window.ethereum
//         .request({ method: "eth_requestAccounts" })
//         .then((res) => accountChangeHandler(res[0]));
//     } else {
//       alert("install metamask extension!!");
//     }
//   };
  
//   window.ethereum.request({method:'eth_requestAccounts'})
// .then(res=>{
//         // Return the address of the wallet
//         console.log(res) 
// })


  return (
  <div className="flex flex-wrap bg-grey w-screen h-screen">
    <BrowserRouter>
    {/* <Sidebar /> */}
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
