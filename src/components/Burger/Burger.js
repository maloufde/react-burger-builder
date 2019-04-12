import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';

const burger = (props) => {
  const burgerIngredients = Object.keys(props.ingredients)
    .map(ingredientName => {
      return [...Array(props.ingredients[ingredientName])]
        .map((_, i) => {
          return <BurgerIngredient key={ingredientName + i} type={ingredientName}/>
        });
    });

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type={'bread-top'}/>
      {burgerIngredients}
      <BurgerIngredient type={'bread-bottom'}/>
    </div>
  )
};

export default burger;
