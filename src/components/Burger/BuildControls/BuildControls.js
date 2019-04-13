import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => {
  const uiControls = controls.map(ctl => (
    <BuildControl key={ctl.label}
                  label={ctl.label}
                  onMore={() => props.onIncrement(ctl.type)}
                  onLess={() => props.onDecrement(ctl.type)}
                  disabled={props.disabled[ctl.type]}/>
  ));

  const currentPriceInfo = <p>Current Price: <strong>{props.price.toFixed(2)}</strong> EUR</p>;

  const checkoutControl = (
    <button className={styles.OrderButton}
            disabled={props.orderDisabled}
            onClick={props.onOrderNow}>
      ORDER NOW
    </button>
  );

  return (
    <div className={styles.BuildControls}>
      {currentPriceInfo}
      {uiControls}
      {checkoutControl}
    </div>
  )
};

export default buildControls;


