import React, { useState } from 'react'

export default function CateguryOption() {
  const [indexShow, setIndexShow] = useState(1)
  function renderCategory() {
    switch (indexShow) {
      case 1:
        return <span>دسته بندی لب تاب ها</span>
      case 2:
        return <span>دسته بندی عذا ها</span>
      case 3:
        return <span>دستته بندی ها</span>
      case 4:
        return <span>نقاشی</span>
      default:
        return null
    }
  }

  return (
    <div className='w-full h-full grid grid-cols-[1fr_4fr] items-center'>
      <div className={`w-full h-full flex justify-start items-center flex-col gap-3 overflow-x-auto border-l-2`}>
        <span className='hover:text-red-500 cursor-pointer' onClick={() => setIndexShow(1)}>لب تاب</span>
        <span className='hover:text-red-500 cursor-pointer' onClick={() => setIndexShow(2)}>غذا</span>
        <span className='hover:text-red-500 cursor-pointer' onClick={() => setIndexShow(3)}>بتدی ها</span>
        <span className='hover:text-red-500 cursor-pointer' onClick={() => setIndexShow(4)}>پلن</span>
      </div>
      <div className='w-full flex justify-center items-center flex-col'>
        {renderCategory()}
      </div>
    </div>
  )
}
