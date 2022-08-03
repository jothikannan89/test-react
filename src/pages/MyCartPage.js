import React, { useContext } from 'react';
import { AppContext } from '../Context';
import { Link, useParams } from 'react-router-dom';



const CartList=()=>{

  const { cartItems, dispatchUserEvents } = useContext(AppContext);


  const handleCartRemove = (item) => {
    dispatchUserEvents('REMOVE', {cart_id:item.cart_id});
    }

  return cartItems.map(item=>{
    return(<li className="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h4 className="my-0">{item.title}</h4>
      <small className="text-muted">{item.description}</small>
    </div>
    <span className="text-muted"><strong>{`${item.price}$`}</strong></span>
    <span><i style={{fontSize: 25,cursor: "pointer"}} onClick={()=>{handleCartRemove(item)}} className="fas  fa-trash  ml-4" aria-hidden="true"></i></span>
  </li>)
  })
}




  const MyCartPage=(props)=> {

    const { cartItems } = useContext(AppContext);

    return (

      <div>
         <main className="mt-5 pt-4">
    <div className="container wow fadeIn">
      <h2 className="my-5 h2 text-center">Checkout form</h2>
      <div className="row">
      <div className="col-md-12 mb-12">

<h4 className="d-flex justify-content-between align-items-center mb-3">
  <span className="text-muted">Your cart</span>
  <span className="badge badge-secondary badge-pill">{cartItems.length}</span>
</h4>

<ul style={{textAlign:"left"}}className="list-group mb-3 z-depth-1">
  <CartList/>
  <li className="list-group-item d-flex justify-content-between">
    <span>Total (USD)</span>
    <h2><strong>{`$ ${cartItems.reduce((n, {price}) => n + price, 0)}`}</strong></h2>
  </li>
</ul>
<center> <Link
            to={{
              pathname:`/`,
            }}
          ><button className="btn btn-md my-0 p" href="">Cancel
              </button></Link><button type="button" class="btn btn-primary">Check Out</button></center>
</div>
      </div>
    </div>
  </main>
      </div>
    )
  };

export default MyCartPage;