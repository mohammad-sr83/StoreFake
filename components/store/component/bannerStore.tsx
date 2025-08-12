import React from 'react'

export default function BannerStore() {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 '>
        <img src='https://dkstatics-public.digikala.com/digikala-adservice-banners/7b5b9b8e19e407f4df329cef5ef2b35700ce7144_1745668962.jpg?x-oss-process=image/quality,q_95' className='w-full h-full rounded-2xl cursor-pointer object-contain'/>
        <img src='https://dkstatics-public.digikala.com/digikala-adservice-banners/60e5c4e37fae3a8968297d27c934f37d83967d3a_1745673347.jpg?x-oss-process=image/quality,q_95' className='w-full h-full rounded-2xl cursor-pointer object-contain'/>
    </div>
  )
}

export function PhotoStore({photo}:{photo:Array<string>}) {
    return (
      <div className={`w-full grid grid-cols-2 md:grid-cols-${photo.length <4 ? photo.length :'4'} gap-3 mb-3`}>
        {photo.map((item,index)=>(
            <img key={index} src={item} className='w-full h-full rounded-2xl cursor-pointer object-contain'/>
        ))}
      </div>
    )
  }
