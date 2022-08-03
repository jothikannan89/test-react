import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import ProductDetailsPage from  "./pages/ProductDetailsPage"
import MyCartPage from  "./pages/MyCartPage"

import { BrowserRouter } from 'react-router-dom';

class Routes extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      cart_items : []
    }
    }

  render() {
    return (
      <BrowserRouter>
      <Switch >
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/product/details/:id' element={<ProductDetailsPage/>} />
        <Route exact path='/view-cart' element={<MyCartPage/>} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
