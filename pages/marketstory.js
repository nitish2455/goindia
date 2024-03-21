import React from 'react'
import Layout from '../components/Layout'
import MarketStories from '../components/MarketStories'

const Marketstory = () => {
  return (
    <Layout>
       <div className="space-y-3">
    <h1 className='text-3xl text-red-600 font-bold'>Market Stories</h1>
      <MarketStories/>
      <MarketStories/>
      <MarketStories/>
    </div>
    </Layout>
  )
}

export default Marketstory