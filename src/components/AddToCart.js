import React, { useContext, useState } from 'react';
import { AppContext } from '../Context';

const AddToCart = (props) => {
  const { dispatchUserEvents } = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  const uuidv4 =()=> {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

	const handleCartAddition = () => {
          setLoading(true);
          dispatchUserEvents('ADD', {newItem:{... props.item,cart_id:uuidv4()}});
          setTimeout(() => {
            setLoading(false);
          }, 200);
	};

	return (
			loading?<button className="btn btn-primary" type="button" disabled>
      <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      Adding...
    </button>:<button style={{ marginTop: -3}} onClick={handleCartAddition} type="button" className="btn btn-primary">Add to Card <i className="fas fa-shopping-cart ml-1"></i></button>

	);
};

export default AddToCart;


