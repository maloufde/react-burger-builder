import React from 'react';
import styles from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) => {
    let ingredient = null;

    switch(props.type){
        case ('bread-top'): {
            ingredient = (
                <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}/>
                    <div className={styles.Seeds2}/>
                </div>
            );
            break;
        }
        case ('cheese'): {
            ingredient = <div className={styles.Cheese}/>;
            break;
        }
        case ('salad'): {
            ingredient = <div className={styles.Salad}/>;
            break;
        }
        case ('bacon'): {
            ingredient = <div className={styles.Bacon}/>;
            break;
        }
        case ('meat'): {
            ingredient = <div className={styles.Meat}/>;
            break;
        }
        case ('bread-bottom'): {
            ingredient = <div className={styles.BreadBottom}/>;
            break;
        }
        default: {
            break;
        }
    }

    return ingredient;
};

burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;