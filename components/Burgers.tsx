"use client"
import { CloseIcon, MinusIcon, PlusIcon, Product3, Product4, Product5, Product6, ProductImg1, ProductImg2 } from '@/public/images/icons';
import React, { useState } from 'react';

interface ProductType {
  img: JSX.Element;
  price: string | number;
  title: string;
  weight: string | number;
}

const Burgers = () => {
  const [Products] = useState<ProductType[]>([
    {
      img: <ProductImg1 />,
      price: "689₽",
      title: "Мясная бомба",
      weight: "520г"
    },
    {
      img: <ProductImg2 />,
      price: "550₽",
      title: "Супер сырный",
      weight: "512г"
    },
    {
      img: <Product3 />,
      price: "639₽",
      title: "Сытный",
      weight: "580г"
    },
    {
      img: <Product4 />,
      price: "480₽",
      title: "Тяжелый удар",
      weight: "470г"
    },
    {
      img: <Product5 />,
      price: "450₽",
      title: "Вечная классика",
      weight: "450г"
    },
    {
      img: <Product6 />,
      price: "560₽",
      title: "Итальянский",
      weight: "510г"
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const openModal = (product: ProductType) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="flex flex-wrap">
        {Products.map((item, index) => (
          <div key={index} className="flex flex-col bg-white rounded-lg p-[9px] w-[300px] h-[411px]">
            <span onClick={() => openModal(item)}>
              {item.img}
            </span>
            <p className="text-[24px] font-semibold">{item.price}</p>
            <h3 className="text-[16px] font-normal mb-[29px]">{item.title}</h3>
            <p className="text-[#B1B1B1] text-[16px]">{item.weight}</p>
            <button className="w-full font-normal text-[16px] bg-[#F2F2F3] rounded-[12px] py-[9px] hover:bg-[#FF7020] hover: text-white">
              Добавить
            </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-[#000000CC] bg-opacity-80 flex  justify-center items-center z-50 md:flex-row">
          <div className="bg-white p-6 rounded-lg w-[684px] relative">
            <button onClick={closeModal} className="absolute top-[30px] right-[24px]">
              <CloseIcon/>  
            </button>
            <div className="mb-4">
            <h3 className="text-[40px] font-normal mb-[24px]">{selectedProduct.title}</h3>
            <div className='flex space-x-[16px]'>
                <div>
              <span>{selectedProduct.img}</span>
                </div>
                <div>
              <p className='mb-[10px]'>Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.</p>
              <span>Состав:</span>
              <ul className='mb-[5px]'>
                <li>Пшеничная булочка</li>
                <li>Котлета из говядины</li>
                <li>Красный лук</li>
                <li>Листья салата</li>
                <li>Соус горчичный</li>
              </ul>
              <p className="text-[#B1B1B1] text-[16px]">{selectedProduct.weight}</p>
                </div>
            </div>
            </div>
            <div className='flex items-center space-x-[16px]'>
            <button className='bg-[#FF7020] text-white text-[16px] font-normal w-[276px] py-[10px] rounded-[12px]'>Добавить</button>
            <div className='flex items-center justify-between bg-[#F2F2F3] rounded-[20px] w-[84px] py-[9px] px-[12px] '>
            <MinusIcon/>
           <span>1</span>
            <PlusIcon/>
           </div>
            </div>
            <p className="text-[24px] font-semibold text-end">{selectedProduct.price}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Burgers;







