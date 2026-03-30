
import axios from 'axios'
import './App.css'
import Cards from './Cards'
import Hero from './Hero'
import Navbar from './Navbar'
import { Suspense, use, useState } from 'react'
import Spinner from './Spinner'
import GetStarted from './GetStarted'
import SimplePricing from './SimplePricing'
import Workflow from './Workflow'

const pricePromise = axios.get('data.json')

function CardsSection({ cart, setPage, page, setCart }) {
  const pricePromiseRes = use(pricePromise)
  const pricePromiseData = pricePromiseRes.data

  return (
    <Cards
      cart={cart}
      setPage={setPage}
      page={page}
      setCart={setCart}
      pricePromiseData={pricePromiseData}
    ></Cards>
  )
}

function App() {
  const [cart, setCart] = useState([])
  const [page, setPage] = useState('products')
  console.log(cart);
  return (
    <>
      <Navbar cart={cart}></Navbar>
      <Hero></Hero>
      <Suspense fallback={<Spinner></Spinner>}>
        <CardsSection cart={cart} setPage={setPage} page={page} setCart={setCart}></CardsSection>
      </Suspense>
      <GetStarted></GetStarted>
      <SimplePricing></SimplePricing>
      <Workflow></Workflow>
    </>
  )
}

export default App
