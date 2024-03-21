import Image from 'next/image'
import React from 'react'

const MarketStories = () => {
  return (
    <div className='z-40'>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <Image className="w-full" src="/card-top.jpg" width={363}
          height={204} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2 text-gray-600">The Coldest Sunset</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
</div>
    </div>
  )
}

export default MarketStories