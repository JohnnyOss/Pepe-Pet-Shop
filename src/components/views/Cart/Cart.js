import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faStore } from '@fortawesome/free-solid-svg-icons';
import { CartItem } from '../../features/CartItem/CartItem';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux.js';

import styles from './Cart.module.scss';

class Component extends React.Component {
  state = {
    cart: this.props.cartProducts,
  }

  render() {
    const cartContent = JSON.parse(localStorage.getItem('cartItem'));

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        className={styles.root}
      >
        <div className={styles.container}>
          <Card className={styles.card}>
            <div className={styles.content}>
              {cartContent !== null
                ?
                <h3>Your order:</h3>
                :
                <h3 className={styles.title}>Your cart it is empty!</h3>}
              {cartContent === null ? null : cartContent.map(product => (
                <CartItem
                  key={product._id}
                  {...product}
                  edit={true}>
                </CartItem>
              ))}
              {cartContent !== null
                ?
                <div>
                  <h4>Order price: {cartContent.map(product => product.totalPrice).reduce((prev, curr) => prev + curr)}$</h4>
                  <Button component={ Link } to={'/form'} variant="contained" color="primary" className={styles.button}>
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
      </motion.div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  cartProducts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  cartProducts: getCart(state),
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
