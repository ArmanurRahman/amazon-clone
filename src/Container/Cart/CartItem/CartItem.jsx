import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <div className={classes.CartItem}>
      <img src={props.src} />
      <ul>
        <li>
          <p>{props.title}</p>
        </li>
        <li>
          <p>
            <strong>{props.name}</strong>{' '}
          </p>
        </li>
        <li>
          {' '}
          <input type="checkbox" />{' '}
          <label htmlFor="">
            This will be a gift (Sender's name will be displayed){' '}
          </label>
        </li>
        <li>
          <select>
            Qty
            <option>1</option>
          </select>
        </li>
      </ul>

      <p className={classes.Price}>
        <strong>${props.price}</strong>
      </p>
    </div>
  );
};

export default CartItem;
