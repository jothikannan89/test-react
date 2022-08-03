import React, { Component,useEffect,useState } from 'react'
import ProductController from "../controllers/ProductController"
import { Link} from 'react-router-dom';
import AddToCart from "../components/AddToCart"

function ProductListPage(){
  const [productList, SetProductList] = useState([]);
  const [loadingData, SetLoadingData] = useState(true);
  
  useEffect(()=>{
    getProductList()
  },[])

  const getProductList = () =>{
    ProductController.getProducts().then(result=>{
      SetProductList(result)
      SetLoadingData(false)
    }).catch(err=>{
      SetProductList([])
      SetLoadingData(false)
    })
  }
  const renderProductList = ()=>{    

    return  loadingData?
                <div className="col-lg-12 col-md-12 mb-12">
                  <center style={{    display: "contents"}}>Loading...</center>
                </div>:productList&&productList.length>0&&productList.map((res,i)=>{
        return (
                  <div className="col-lg-3 col-md-6 mb-4" key={i}>
          <div className="card"  style={{minHeight: 620}}>

            <div className="view overlay">
            <Link
              to={{
                pathname:`/product/details/${res.id}`,
              }}
              state={{ productId: res.id }}
            >
              <img src={res.image} className="card-img-top" style={{height:300}}
                alt=""/>
              <a>
                <div className="mask rgba-white-slight"></div>
              </a>
              </Link>
            </div>
            <div className="card-body text-center">
              <a href="" className="grey-text">
                <h5>{res.category}</h5>
              </a>
              <Link
              to={{
                pathname:`/product/details/${res.id}`,
              }}
              state={{ productId: res.id }}
            >
              <h5>
                <strong>
                  <a href="" className="dark-grey-text">{res.title}
                    <span className="badge badge-pill danger-color">NEW</span>
                  </a>
                </strong>
              </h5>
              </Link>
              <h4 className="font-weight-bold blue-text">
                <strong>{`${res.price}`}$</strong>
              </h4>
            </div>

            <AddToCart count={1} item={res}/>
            </div>
          </div>
      )
    }
    );
  }
  return(
    <div>
      <div className="row wow fadeIn">
        {renderProductList()}
      </div>
    </div>
  )
}

export default ProductListPage