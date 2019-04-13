import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const BASE_PRICE = 4.0;
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
};

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: BASE_PRICE
  };

  incrementIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients};
    const itemPrice = INGREDIENT_PRICES[type];

    updatedIngredients[type] = updatedIngredients[type] + 1;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.state.totalPrice + itemPrice
    })
  };

  decrementIngredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }

    const updatedIngredients = {...this.state.ingredients};
    const itemPrice = INGREDIENT_PRICES[type];

    updatedIngredients[type] = updatedIngredients[type] - 1;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.state.totalPrice - itemPrice
    })

  };

  render() {
    const disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
            onIncrement={this.incrementIngredientHandler}
            onDecrement={this.decrementIngredientHandler}
            disabled={disabledInfo}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
