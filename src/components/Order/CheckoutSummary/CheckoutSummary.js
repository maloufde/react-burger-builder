import React from 'react';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import styles from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={styles.CheckoutSummary}>
      <h1>We hope it tasts well!</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        type="Danger"
        onClick={() => {}}>CANCEL
      </Button>
      <Button
        type="Success"
        onClick={() => {}}>CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
