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
                    onLess={() => props.onDecrement(ctl.type)}/>
      ));

  return (
    <div className={styles.BuildControls}>
      {uiControls}
    </div>
  )
};

export default buildControls;


