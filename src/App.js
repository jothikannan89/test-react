import { useState } from 'react';
import './App.css';
import Routes  from './Routes';
import {AppContext} from  "./Context";

function App() {
  const [cartItems, SetCartItems] = useState([]);
  const dispatchUserEvents =(action,payload)=>{
    switch(action){
      case 'ADD':
        SetCartItems([...cartItems,payload.newItem])
      break;
      case 'REMOVE':
        SetCartItems(cartItems.filter(item=>item.cart_id!==payload.cart_id))
      break;
    }
  }
  return (
    <div className="App">
      <AppContext.Provider value={{cartItems,dispatchUserEvents}}>
         <Routes/>
      </AppContext.Provider>
   </div>
  );
}

export default App;
