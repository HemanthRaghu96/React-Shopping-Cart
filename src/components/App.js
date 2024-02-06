import Footer from "./Footer";
import MainBody from "./MainBody";
import Header from "./Header";
import React, { useState } from "react";

function App() {

  // variables when change in add/remove

  const [count,setCount]=useState(0)
  return (
    <div className="App">

    {/* Navbar header and passing Props*/}

      <Header 
        count={count}
      />

      {/* Main Cards body and passing Props*/}

      <MainBody 
        count={count}
        setCount={setCount}
      />

      {/* Footer detailes */}

      <Footer />
      
    </div>
  );
}
export default App;
