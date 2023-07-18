

import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";


const App = () => {
   const handleClick = () => {
    window.location.replace("https://www.github.com/swarupe7");
  };
  
  return (
    <>
     
      <Intro />
      <p className="pl-desc" style={{ textAlign: "center" }}>
        wanna see my GITHUB profile{" "}<br/>
        <button onClick={handleClick}>click Here!!</button>
      </p>
      <ProductList/>
      
   
      
      <Contact /> 
      </>
    
  );
};

export default App;
