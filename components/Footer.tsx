import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white mt-[100px] px-4 sm:px-[20px] md:px-[40px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start sm:space-x-[40px] mt-[51px]">
        <div className="flex justify-center sm:justify-start">
          <Image style={{ width: "300px", height: "58px" }} priority src={"/FooterImg.svg"} alt="Logo" width={300} height={58}/>
        </div>
        <div className="mt-[32px] sm:mt-[0px] flex flex-col items-start sm:items-start text-center sm:text-left">
          <p className="mb-[24px] text-lg">Номер для заказа</p>
          <div className="flex items-center space-x-[8px] justify-center sm:justify-start">
            <Image style={{ width: "24px", height: "24px" }} priority  src={"/Call.svg"} alt="Call Icon" width={24} height={24}/>
            <span className="text-[18px]">+7(930)833-38-11</span>
          </div>
        </div>
        <div className="mt-[32px] sm:mt-[0px] flex flex-col items-start sm:items-start text-center sm:text-left">
          <p className="mb-[22px] text-[18px]">Мы в соцсетях</p>
          <div className="flex space-x-[16px] justify-center sm:justify-start">
            <Image style={{ width: "36px", height: "36px" }} priority src={"/VKImg.svg"} alt="VK" width={36}height={36}  />
            <Image style={{ width: "36px", height: "36px" }} priority src={"/TelegramImg.svg"} alt="Telegram" width={36} height={36}/>
          </div>
        </div>
      </div>
      <div className="mt-[40px] text-left sm:text-left flex flex-col sm:flex-row justify-between items-start sm:items-start pl-4 sm:pl-[75px]">
        <p className="text-[18px]">© YouMeal, 2022</p>
        <span className="text-[18px]">Design: Anastasia Ilina</span>
      </div>
    </div>
  )
}

export default Footer










