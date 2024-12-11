import Products from '@/components/Products'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#F9F9F9]'>
    <header className='py-[20px] w-full'>
      <Image style={{width:"152px", height:"33px"}} priority className='mx-auto' src={"/logo.svg"} alt='Logo' width={152} height={33}/>
      <div className='flex flex-col-reverse justify-center items-center mt-[24px] mb-[40px] gap-[57px] md:flex-row '>
      <Image style={{width:"250px", height:"289px"}} priority src={"/burger1.svg"} alt='Burger Img' width={250} height={289}/>
      <p className='font-bold text-[30px] md:text-[50px] w-[85%] md:w-[437px] text-[#FF5C00] text-center md:text-left'>Только самые сочные бургеры!</p>
      </div>
    </header>
    <nav><Products/></nav>
    </div>  
  )
}

export default page