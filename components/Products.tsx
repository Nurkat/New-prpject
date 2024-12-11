"use client"
import { BurgerImg, ComboImg, DesertImg, HotdogImg,PizzaImg,ShaurmaImg, SnackImg, SouseImg, VokImg } from '@/public/images/icons';
import React, { useState } from 'react';
import Basket from './Basket';
import Burgers from './Burgers';
import Footer from './Footer';

interface TagType {
  tagName: string;
  path: null | string;
  img: JSX.Element;
  isActive: boolean;
}

const Products = () => {
  const [tags, setTags] = useState<TagType[]>([
    {
      tagName: "Бургеры",
      path: null,
      img: <BurgerImg />,
      isActive: true,
    },
    {
      tagName: "Закуски",
      path: null,
      img: <SnackImg />,
      isActive: false,
    },
    {
      tagName: "Хотдоги",
      path: null,
      img: <HotdogImg />,
      isActive: false,
    },
    {
      tagName: "Комбо",
      path: null,
      img: <ComboImg />,
      isActive: false,
    },
    {
      tagName: "Шаурма",
      path: null,
      img: <ShaurmaImg />,
      isActive: false,
    },
    {
      tagName: "Пицца",
      path: null,
      img: <PizzaImg />,
      isActive: false,
    },
    {
      tagName: "Вок",
      path: null,
      img: <VokImg />,
      isActive: false,
    },
    {
      tagName: "Десерты",
      path: null,
      img: <DesertImg />,
      isActive: false,
    },
    {
      tagName: "Соусы",
      path: null,
      img: <SouseImg />,
      isActive: false,
    },
  ]);

  const handleItemClick = (index: number) => {
    setTags((prevTags) =>
      prevTags.map((item, i) => ({...item, isActive: i === index ? true : false,}))
    );
  };

  return (
    <>
    <div className="w-full mx-[auto] px-[20px]">
      <ul className="flex items-center gap-[24px] mb-[131px] overflow-auto">
        {tags.map((item, index) => (
          <li  onClick={() => handleItemClick(index)}  key={index} className={`flex rounded-full p-[9px] ${item.isActive ? 'bg-[#FFAB08]' : 'bg-white'}`}>
            <span>{item.img}</span>
            <p>{item.tagName}</p>
          </li>
        ))}
      </ul>
      <h1 className='font-semibold text-[40px] text-center'>Бургеры</h1>

   <div className='flex '>
         <div className="hidden w-[300px] h-[485px] bg-white rounded-md pr-[10px] py-[24px] px-[16px] md:flex">
         <Basket/>
         </div>
        <div className="w-full md:w-full">
        <Burgers/>
       </div>
   </div>
    </div>
   <Footer/>
    </>
  );
};

export default Products;




