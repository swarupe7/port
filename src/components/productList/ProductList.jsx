import './productList.css';
import Product from '../product/Product';
import {products} from '../../data';

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Projects </h1>
        <p className="pl-desc">
          These are a list of awesome projects built by me.
          Many of them are built using React,Express,Mongodb,Nodejs and other stuff are used.
          Go and click on them to view that product.
        </p>


      </div>
      <div className="pl-list">
        {products.map((item)=>(
            <Product   key={item.id} img={item.img} link={item.link} />

        ))}
      
       



      </div>

    </div>
  )
}

export default ProductList