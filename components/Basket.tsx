"use client";
import { BikeImg, MinusIcon, PlusIcon } from '@/public/images/icons';
import Image from 'next/image';
import React, { useState } from 'react';

const Basket = () => {
  
  const [items, setItems] = useState([
    { id: 1, title: "Супер сырный", price: 550, weight: "512г", quantity: 1, imgSrc: "/BurgerImg2.svg" },
    { id: 2, title: "Картошка фри", price: 245, weight: "180г", quantity: 1, imgSrc: "/FreImg.svg" },
    { id: 3, title: "Супер сырный", price: 239, weight: "245г", quantity: 1, imgSrc: "/HotdogImg.svg" }
  ]);

 
  const handleQuantityChange = (id: number, action: "increase" | "decrease") => {
    setItems(prevItems =>
      prevItems.map(item => item.id === id ? {...item,quantity: action === "increase" ? item.quantity + 1 : item.quantity > 1 ? item.quantity - 1 : 1}: item)
    );
  };

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div className='flex items-center justify-between border-b-[1px] mb-[16px]'>
        <h2 className='font-semibold text-[24px]'>Корзина</h2>
        <span>{items.length}</span>
      </div>

      {items.map(item => (
        <div key={item.id} className='flex items-center space-x-3 justify-between mb-[16px] border-b-[1px]'>
          <Image style={{ width: "64px", height: "52px" }} priority src={item.imgSrc} alt='Product' width={64} height={52} />
          <div>
            <p className='text-[12px] font-normal'>{item.title}</p>
            <span className='text-[#B1B1B1] text-[12px] font-normal'>{item.weight}</span>
            <h3 className='text-[12px] font-normal'>{item.price}₽</h3>
          </div>
          <div className='flex items-center justify-between bg-[#F2F2F3] rounded-[20px] w-[84px] py-[9px] px-[12px]'>
           <button  onClick={() => handleQuantityChange(item.id, "decrease")}>
            <MinusIcon />
           </button>
            <span>{item.quantity}</span>
           <button  onClick={() => handleQuantityChange(item.id, "increase")}>
            <PlusIcon />
           </button>
          </div>
        </div>
      ))}

      <div className='flex items-center justify-between mb-[24px]'>
        <p>Итого</p>
        <span>{totalPrice}₽</span> 
      </div>

      <button className='bg-[#FF7020] text-white text-[16px] font-normal w-full py-[10px] rounded-[12px]'>
        Оформить заказ
      </button>

      <div className='flex space-x-4 mt-[8px]'>
        <BikeImg />
        <p>Бесплатная доставка</p>
      </div>
    </div>
  );
}

export default Basket;

