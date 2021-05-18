import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../../features/CartItem/CartItem';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux.js';

import styles from './Cart.module.scss';

const Component = ({cart}) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.content}>
          {cart.length > 0
            ?
            <h3>Your order:</h3>
            :
            <h3 className={styles.title}>Your cart it is empty!</h3>}
          {cart.map(product => (
            <CartItem
              key={product.id}
              price={product.price}
              image={`../${product.image[0]}`}
              title={product.title}>
            </CartItem>
          ))}
          {cart.length > 0
            ?
            <div>
              <h4>Order price: 99999$</h4>
              <Button component={ Link } to={'/'} variant="contained" color="primary" className={styles.button}>
                Go to form
                <FontAwesomeIcon icon={faFileAlt} className={styles.icon}/>
              </Button>
            </div>
            :
            <div>
              <h4>Go to homepage</h4>
              <Button component={ Link } to={'/'} variant="contained" color="primary" className={styles.button}>
                Homepage
                <FontAwesomeIcon icon={faHome} className={styles.icon}/>
              </Button>
              <h4>Or check our products</h4>
              <Button component={ Link } to={'/products/'} variant="contained" color="primary" className={styles.button}>
                All Products
                <FontAwesomeIcon icon={faStore} className={styles.icon}/>
              </Button>
            </div>}
        </div>
      </Card>
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Cart,
  Container as Cart,
  Component as CartComponent,
};
