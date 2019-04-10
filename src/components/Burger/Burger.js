import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => (
  <div className={styles.Burger}>
      <BurgerIngredient type={'bread-top'}/>
      <BurgerIngredient type={'bacon'}/>
      <BurgerIngredient type={'cheese'}/>
      <BurgerIngredient type={'salad'}/>
      <BurgerIngredient type={'meat'}/>
      <BurgerIngredient type={'bread-bottom'}/>
  </div>
);

export default burger;