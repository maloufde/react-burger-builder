import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

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
    totalPrice: BASE_PRICE,
    readyToOrder: false,
    orderStartet: false
  };

  readyToOrderValidation = (ingredients) => {
    const totalIngredients = Object.keys(ingredients)
      .map(itemKey => {
        return ingredients[itemKey]
      })
      .reduce((sum, el) => (sum + el), 0);

    this.setState({readyToOrder: totalIngredients > 0});
  };

  orderNowHandler = () => {
    this.setState({orderStartet: true});
  };

  orderNowCancelledHandler = () => {
    this.setState({orderStartet: false});
  };

  orderNowCheckoutHandler = () => {
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'C. M. Malouf',
        address: {
          street: 'Im Wahnsinn 11',
          zipCode: '10342',
          country: 'Germany'
        },
        email: 'isdochwas@bumeranqr.com'
      },
      deliveryMethod: 'fastest'
    };

    axios
      .post('/orders.json/', order)
      .then(response => {console.log(response)})
      .catch(error => {console.log(error)});

  };

  incrementIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients};
    const itemPrice = INGREDIENT_PRICES[type];

    updatedIngredients[type] = updatedIngredients[type] + 1;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: this.state.totalPrice + itemPrice
    });

    this.readyToOrderValidation(updatedIngredients);
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
    });

    this.readyToOrderValidation(updatedIngredients);
  };

  render() {
    const disabledInfo = {...this.state.ingredients};
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Modal show={this.state.orderStartet} onClose={this.orderNowCancelledHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            totalPrice={this.state.totalPrice}
            onCancelCheckout={this.orderNowCancelledHandler}
            onProcessCheckout={this.orderNowCheckoutHandler}/>
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
            onIncrement={this.incrementIngredientHandler}
            onDecrement={this.decrementIngredientHandler}
            onOrderNow={this.orderNowHandler}
            disabled={disabledInfo} price={this.state.totalPrice}
            orderDisabled={!this.state.readyToOrder}
        />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
