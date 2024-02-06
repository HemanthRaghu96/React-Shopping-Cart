import Footer from "./Footer";
import MainBody from "./MainBody";
import Header from "./Header";
import React, { useState } from "react";

function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="App">
      <Header 
        count={count}
      />
      <MainBody 
        count={count}
        setCount={setCount}
      />
      <Footer />
      
    </div>
  );
}
export default App;
