import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './components/marketplace/Home.js'

import MarketplaceAbi from './contractsData/Marketplace.json'
import MarketplaceAddress from './contractsData/Marketplace-address.json'
import NFTAbi from './contractsData/NFT.json'
import NFTAddress from './contractsData/NFT-address.json'
import { useState } from 'react'
import { ethers } from "ethers"
import { Spinner } from 'react-bootstrap'
import { MainPage } from "./components/main/MainPage";
import { Navigation } from "./components/navbar/Navbar.jsx";
import './App.scss'
function App() {
  const [loading, setLoading] = useState(true)
  const [buttonText,setButtonText] = useState("")
  let [count, setCount] = useState(0)
  const [account, setAccount] = useState(null)
  const [player, setPlayer] = useState('')
  const [nft, setNFT] = useState({})
  const [marketplace, setMarketplace] = useState({})
  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0])
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    })

    window.ethereum.on('accountsChanged', async function (accounts) {
      setAccount(accounts[0])
      await web3Handler()
    })
    loadContracts(signer)
  }
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer)
    setMarketplace(marketplace)
    const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer)
    setNFT(nft)
    setLoading(false)
    
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div>
          {/* {!loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
              <Spinner animation="border" style={{ display: 'flex' }} />
              <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
            </div>
          ) : ( */}
            <Routes>
              <Route path="/" element={
                <Home player={player} setPlayer={setPlayer}  marketplace={marketplace} nft={nft}  />
              } />
              <Route path="/mainpage" element={
                <MainPage count={count} setCount={setCount} marketplace={marketplace} nft={nft} account={account} player={player}/>
              } />
            </Routes>
          
        </div>
      </div>
      <>
          <Navigation count={count} web3Handler={web3Handler} account={account} />
        </>
    </BrowserRouter>

  );
}

export default App;
