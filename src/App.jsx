
import Sidebar from './components/Sidebar'
import HomePage from './pages/Homepage'
// import Upload from './pages/Upload'
// import Settings from './pages/Settings'
// import Inbox from './pages/inbox'
// import { Route, BrowserRouter, Routes } from "react-router-dom";
// import { useState,useEffect } from 'react'
// import Web3 from 'web3'
// import LandingPage from './pages/LandingPage'

function App() {
  
  // const [account, setAccount] = useState(null);

  // useEffect(() => {
  //   loadWeb3();
  // }, []);

  // async function loadWeb3() {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     await window.ethereum.enable();
  //   } else if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //   } else {
  //     console.log(
  //       "Non-Ethereum browser detected. You should consider trying MetaMask!"
  //     );
  //   }
  // }

  // async function handleConnect() {
  //   if (!window.ethereum) {
  //     console.log(
  //       "Please install MetaMask to connect to the Ethereum network!"
  //     );
  //     return;
  //   }

  //   const accounts = await window.ethereum.request({
  //     method: "eth_requestAccounts",
  //   });
  //   setAccount(accounts[0]);
  // }

  // if (!account) {
  //   return <LandingPage handleConnect={handleConnect} />;
  // }

  return (
  <div className="flex flex-row bg-white w-screen h-screen">
    <Sidebar />
    <HomePage/>
  </div>
  )
}

export default App
