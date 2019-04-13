import React from 'react';

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
    </React.Fragment>
  );
};

export default orderSummary;
