

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
      
      <ProductList/>
      <p className="pl-desc" style={{ textAlign: "center" }}>
        <h3>wanna see my GITHUB profile{" "}</h3><br/>
        <button onClick={handleClick}>click Here!!</button>
      </p>
      
   
      
      <Contact /> 
      </>
    
  );
};

export default App;
