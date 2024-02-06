import React from "react";
import Card from "./Card";

const MainBody = ({ count, setCount }) => {

  //Data provided to Card items.
  const data = [
    {
      id: 1,
      name: "Fancy Product",
      rating: null,
      price: ["$40.00 - $80.00"],
      sale: null,
    },
    {
      id: 2,
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$20.00", "$18.00"],
      sale:'sale'
    },
    {
      id: 3,
      name: "Sale Item",
      rating: null,
      price: ["$50.00", "$25.00"],
      sale:'sale'
    },
    {
      id: 4,
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$40.00"],
      sale: null,
    },
    {
      id: 5,
      name: "Sale Item",
      rating: null,
      price: ["$50.00", "$25.00"],
      sale:'sale'
    },
    {
      id: 6,
      name: "Fancy Product",
      rating: null,
      price: ["$120.00 - $280.00"],
      sale: null,
    },
    {
      id: 7,
      name: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$20.00", "$18.00"],
      sale:'sale'
    },
    {
      id: 8,
      name: "Popular Item",
      rating: "⭐⭐⭐⭐⭐",
      price: ["$40.00"],
      sale: null,
    },
  ];

  return (
    <main>

    {/* Banner detailes */}

      <div className="h-72 bg-black flex flex-col items-center justify-center">
        <h1 className="text-3xl font-poppins text-white md:text-6xl font-black">
          Shop in style
        </h1>
        <p className="tect-sm font-poppins text-slate-400 m-2 md:text-lg">
          With this shop hompeage template
        </p>
      </div>
      <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 m-12 w-4/5 mx-auto">

      {/* Card mapping is done to all the data provided. */}
      {/* Passing Props to Card */}
        {data.map((data) => (
          
          <Card 
          key={data.id} 
          data={data} 
          count={count} 
          setCount={setCount} />
        ))}
      </div>
    </main>
  );
};

export default MainBody;
