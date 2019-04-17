import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";

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
    orderStarted: false,
    loading: false
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
    this.setState({orderStarted: true});
  };

  orderNowCancelledHandler = () => {
    this.setState({orderStarted: false});
  };

  orderNowCheckoutHandler = () => {
    this.setState({loading: true});

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
      .then(response => {
        console.log(response);
        this.setState({loading: false, orderStarted: false});
      })
      .catch(error => {
        console.log(error);
        this.setState({loading: false, orderStarted: false});
      });

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

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        totalPrice={this.state.totalPrice}
        onCancelCheckout={this.orderNowCancelledHandler}
        onProcessCheckout={this.orderNowCheckoutHandler}/>
    );

    if (this.state.loading) {
      orderSummary = <Spinner/>
    }

    return (
      <React.Fragment>
        <Modal show={this.state.orderStarted} onClose={this.orderNowCancelledHandler}>
          {orderSummary}
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
