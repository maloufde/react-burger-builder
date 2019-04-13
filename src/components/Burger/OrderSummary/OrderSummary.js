import React from 'react';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const orderItems = Object.keys(props.ingredients)
    .map(key => {
      return (
        <li key={key}>
          <span style={{textTransform: 'capitalize'}}>{key}</span>: {props.ingredients[key]}
        </li>
      )
    });

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {orderItems}
      </ul>
      <p>Continue to Checkout?</p>
      <Button type="Danger" onClick={props.onCancelCheckout}>CANCEL</Button>
      <Button type="Success" onClick={props.onProcessCheckout}>PROCEED</Button>
    </React.Fragment>
  );
};

export default orderSummary;
