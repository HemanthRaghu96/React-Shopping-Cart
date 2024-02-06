import React, { useState } from "react";

const Card = ({ count, setCount, data }) => {
  // Destructuring data from Props

  const { name, rating, price, sale, button } = data;

  // State variable for Button change

  const [changeButton, setChangeButton] = useState(false);

  // State variable for Button text change

  const [buttonText, setButtonText] = useState("Add to cart");

  // Handling the click event

  const handleClick = (e) => {
    setChangeButton(!changeButton);

    // If button is clicked toggle add/remove button change

    changeButton
      ? setButtonText("Add to Cart")
      : setButtonText("Remove from Cart");

    // If button is clicked change add/ remove count to cart

    changeButton ? setCount(count - 1) : setCount(count + 1);
  };
  return (
    <section>
      <div className="rounded overflow-hidden  shadow-md  border-slate-400 relative w-11/12 min-h-96 ">
        <img
          src={require("./images/cardimage.jpg")}
          alt="Banner"
          className="w-full object-cover "
        />

        {/* Converting all data into design for card items */}

        <div className="flex flex-col items-center my-2 py-2">
          {/* Card item Title */}
          <h2 className="font-poppins font-bold text-xl p-1">{name}</h2>

          {/* Card item Rating */}
          <p className={rating === null ? "hidden" : "font-poppins p-1 mb-1"}>
            {rating}
          </p>
          <div className="flex flex-col md:flex md:flex-row">
            {/* Card item Price */}
            <span
              className={
                price.length === 2
                  ? "font-poppins p-1 mb-1 line-through"
                  : "font-poppins p-1 mb-1"
              }
            >
              {price[0]}
            </span>
            <span className="font-poppins p-1 mb-3 flex-wrap">{price[1]}</span>
          </div>

          {/* Card item Add/Remoce handle button click */}

          {button !== "View option" ? (
            <button
              className="text-base font-poppins p-1 border border-black rounded m-2  absolute bottom-4 hover:bg-black hover:text-white"
              onClick={(e) => handleClick(e)}
            >
              {buttonText}
            </button>
          ) : (
            <button className="text-base font-poppins p-1 border border-black rounded m-2  absolute bottom-4 hover:bg-black hover:text-white">
              View options
            </button>
          )}
        </div>

        {/* Card item sale */}
        <p
          className={
            sale === null
              ? "hidden"
              : "absolute top-1 right-1 md:top-2 md:right-2 rounded-md bg-black  px-2 text-white text-sm font-medium"
          }
        >
          {sale}
        </p>
      </div>
    </section>
  );
};

export default Card;
