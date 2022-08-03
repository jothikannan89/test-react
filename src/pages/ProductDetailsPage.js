import React, { PureComponent ,useState,useEffect} from 'react'
import ProductController from "../controllers/ProductController"
import { Link, useParams } from 'react-router-dom';
import AddToCart from "../components/AddToCart"
import Header from "../components/Header"

function ProductDetailsPage(props){
  const [currentProductDetails, SetCurrentProductDetails] = useState({});
  const [countValue, SetCountValue] = useState(1);
  const [dataLoading, SetDataLoading] = useState(true);

  useEffect(()=>{
    let product_id = props.match&&props.match.params&&props.match.params.id?props.match.params.id:window.location.pathname.split("/")[window.location.pathname.split("/").length-1];
    if(product_id){
      getProductDetails(product_id);
    }
  },[])
  const getProductDetails = (product_id) =>{ //alert(product_id)
   /*  ProductController.getProducts().then(result=>{
      SetProductList(result)
      SetLoadingData(false)
    }).catch(err=>{
      SetProductList([])
      SetLoadingData(false)
    }) */
    ProductController.getSingleProduct(product_id).then(result=>{
      SetCurrentProductDetails(result)
      SetDataLoading(false)
    }).catch(err=>{
      SetCurrentProductDetails([])
      SetDataLoading(false)
      
    })
  }
  return(
    <div>
      <Header/>
      {dataLoading?<div className="col-lg-12 col-md-12 mb-12"><center style={{    display: "contents"}}>Loading...</center></div>
      :currentProductDetails&&<main className="mt-5 pt-4">
      <h1>{currentProductDetails.title}</h1>
    <div className="container dark-grey-text mt-5">
      <div className="row wow fadeIn">
        <div className="col-md-6 mb-4">
          <img src={currentProductDetails.image} className="img-fluid" alt=""/>
        </div>
        <div className="col-md-6 mb-4">
          <div className="p-4">
            <div className="mb-3">
              <a href="">
                <span className="badge purple mr-1">{currentProductDetails.category}</span>
              </a>
              <a href="">
                <span className="badge blue mr-1">New</span>
              </a>
              <a href="">
                <span className="badge red mr-1">Bestseller</span>
              </a>
            </div>
            <p className="lead">
              <span>{`${currentProductDetails.price}$`}</span>
            </p>
            <p className="lead font-weight-bold">Description</p>
            <p>{currentProductDetails.description}</p>
            <form className="d-flex justify-content-left">
              {/* <input type="number" aria-label="Search" value={this.state.countValue} onChange={(e)=>
                  this.setState({countValue:e.currentTarget.value})
              } className="form-control" style={{width: 100}}/> */}
              <AddToCart count={countValue} item={currentProductDetails}/>
           <Link
            to={{
              pathname:`/`,
            }}
          ><button className="btn btn-md my-0 p" href="">Cancel
              </button></Link>
            </form>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  </main>}
    </div>
  )
}

export default ProductDetailsPage