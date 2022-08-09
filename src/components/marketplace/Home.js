import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import './home.scss'
import { Loading } from '../loading/Loading'
import  astro1 from '../../images/astro1.png'
import astro2  from '../../images/astro2.png'
import astro3  from '../../images/astro3.png'
import astro4  from '../../images/astro4.png'

let itemsmain = [
  {
    itemId: 1,
    totalPrice: 0,
    name: 'Astro1',
    image: astro1,
    sold: false
  },
  {
    itemId: 2,
    totalPrice: 0,
    name: 'Astro2',
    image: astro2,
    sold: false
  },
  {
    itemId: 3,
    totalPrice: 0,
    name: 'Astro3',
    image: astro3,
    sold: false
  },
  {
    itemId: 4,
    totalPrice: 0,
    name: 'Astro4',
    image: astro4,
    sold: false
  }
]


const Home = ({ marketplace, nft, player, setPlayer }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState()
  const [sold, setSold] = useState(false)


  const loadMarketplaceItems1 = async () => {
    // const response = await fetch('https://testnets-api.opensea.io/api/v1/asset/0x24924FBe7BFD331203205AEe43268350222687cA/0/')

    // const metadata = await response.json()
    // setName(metadata.name)


    const itemCount = 3;
    let items = []

    const delay = (ms = 1000) => new Promise(r => setTimeout(r, ms));
    // for (let i = 0; i < itemCount; i++) {
    //   const uri = `https://testnets-api.opensea.io/api/v1/asset/0x24924FBe7BFD331203205AEe43268350222687cA/${i}/`
    //   // use uri to fetch the nft metadata stored on ipfs 
    //   await delay();
    //   const response = await fetch(uri)
    //   if (response.ok) {
    //     const metadata = await response.json()

    //     items.push({
    //       itemId: metadata.id,
    //       totalPrice: 0,
    //       name: metadata.name,
    //       image: metadata.image_url,
    //       sold: false
    //     })
    //   } else {
    //     return Promise.reject(response);
    //   }

    // }

    setLoading(false)
    setItems(itemsmain)
  }


  const buyMarketItem = async (item) => {

    try {
      await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    } catch (e) {
      if (e.toString().includes('item already sold')) {
        item.sold = true;
        const newItems = items.map((prevItem) => {
          return (prevItem.itemId === item.itemId) ? { ...prevItem, sold: true } : prevItem
        })
        setItems(newItems)
      }

    }

  }
  const play = (item) => {
    setPlayer(item.image)
    console.log(player)
  }

  useEffect(() => {
    loadMarketplaceItems1()
    // loadMarketplaceItems()

  }, [])

  if (loading) return (
    <Loading />
  )
  return (
    <div className="main">

      {items.length > 0 ?
        <div className="px-5 container">

          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <Col key={idx} className="overflow-hidden">
                <Card>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body color="secondary">
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {/* ${ethers.utils.formatEther(item.totalPrice)} ETH */}
                      $0.001 ETH
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <div className='d-grid'>

                      <button className='button' onClick={item.sold ? () => play(item) : () => buyMarketItem(item)} variant="primary" size="lg">
                        {item.sold ? 'Play' : `Buy`}
                      </button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        : (
          <main style={{ padding: "1rem 0" }}>
            <h2>No listed assets</h2>
          </main>
        )}
    </div>

  );
}
export default Home


