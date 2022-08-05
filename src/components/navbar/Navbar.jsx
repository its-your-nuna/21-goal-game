import React, { useContext } from 'react'
import './navbar.scss'
import prize from '../../images/prize.png'
import { useState } from 'react'
import { TaskContext } from '../Context'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'

export const Navigation = ({ count, web3Handler, account }) => {
  const [currentAccount, setCurrentAccount] = useState('')
  const { setModalText } = useContext(TaskContext)
  const { setModalShow } = useContext(TaskContext)
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        alert('Get MetaMask!')
        return
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Connected', accounts[0])
      setCurrentAccount(accounts[0])
      if (accounts[0]) {
        setModalText('Connected')
        setModalShow(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="navbar">
        <Nav>
          <Nav.Link href="#contact">
              <span id="cash">
              💎 {count} ETH
              </span>
          </Nav.Link>
          <a href="#contact">
            <div>
              <span id="timer">
                
              </span>
            </div>
          </a>
          <Nav.Link as={Link} to="/">
            Marketplace
          </Nav.Link>
          <Nav.Link as={Link} to="/create">
            Create
          </Nav.Link>
          {/* 
          <Nav.Link as={Link} to="/my-listed-items">
            My Listed Items
          </Nav.Link> */}
          <Nav.Link as={Link} to="/my-purchases">
            My Purchases
          </Nav.Link>
          <Nav.Link as={Link} to="/mainpage">
            Main Page
          </Nav.Link>
        </Nav>
        <Nav>
          {account ? (
            <Nav.Link
              href={`https://etherscan.io/address/${account}`}
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <button className='button btn-sm '>
                {account.slice(0, 5) + '...' + account.slice(38, 42)}
              </button>
            </Nav.Link>
          ) : (
            <button className="button btn-sm " onClick={web3Handler} variant="outline-light">
              Connect Wallet
            </button>
          )}
        </Nav>
      </div>
    </>
  )
}
