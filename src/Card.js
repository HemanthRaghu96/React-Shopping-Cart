import React, { useState } from "react";

const Card = ({count,setCount,data}) => {
  const{name,rating,price,sale}=data
const [changeButton,setChangeButton]=useState(false)
const [buttonText,setButtonText]=useState('Add to cart')


const handleClick=(e)=>{
  setChangeButton(!changeButton)
  changeButton ?setButtonText('Add to Cart'):setButtonText('Remove from Cart')
  changeButton ? setCount(count-1):setCount(count+1)
  console.log(price[0])
}
  return (
    <section>
      <div className="rounded overflow-hidden  shadow-xl  border border-slate-400 relative w-5/6 min-h-96 ">
        <img src={require("./images/cardimage.jpg")} alt="Banner"  className='w-full object-cover '/>

        <div className="flex flex-col items-center my-2 py-2">
          <h2 className="font-poppins font-bold text-xl p-1">{name}</h2>
          <p className={rating===null?"hidden":"font-poppins p-1 mb-1"}>{rating}</p>
          <div className="flex flex-col md:flex md:flex-row">
          <span className={((price.length)===2)? "font-poppins p-1 mb-1 line-through":"font-poppins p-1 mb-1"}>{price[0]}</span>
          <span className="font-poppins p-1 mb-3 flex-wrap">{price[1]}</span>
          </div>
          <button className="text-base font-poppins p-1 border border-black rounded m-2  absolute bottom-4" onClick={(e)=>handleClick(e)}>
          {buttonText}
          </button>
        </div>
        <p className={sale===null?"hidden":"absolute top-1 right-1 rounded-md bg-black  px-2 text-white text-sm font-medium"}>
          {sale}  
        </p>
      </div>
    </section>
  );
};

export default Card;
