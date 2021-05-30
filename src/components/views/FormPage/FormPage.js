import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHome, faStore } from '@fortawesome/free-solid-svg-icons';

import { CartItem } from '../../features/CartItem/CartItem';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart, deleteAllCart } from '../../../redux/productsRedux.js';
import { fetchNewOrder } from '../../../redux/ordersRedux';

import styles from './FormPage.module.scss';

class Component extends React.Component {
  state = {
    order: {
      orderItems: this.props.cartProducts,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      orderDate: '',
    },
  }

  handleChange = (event) => {
    const { order } = this.state;
    this.setState({ order: { ...order, [event.target.name]: event.target.value } });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { order } = this.state;
    const { sendOrder, deleteItems } = this.props;

    if(order.firstName.length < 3) return alert('Min. 3 characters in first name');
    if(order.lastName.length < 3) return alert('Min. 3 characters in last name');

    if((order.firstName.length > 2) && (order.lastName.length > 2) && order.email && order.phone && order.orderItems) {
      const today = new Date();
      order.orderDate = today;
      sendOrder(order);
      console.log('order:', order);
      alert('Your order has been sended');
      deleteItems(order);
    } else {
      alert('Please fill required fields');
    }
  }

  render() {
    const { cartProducts } = this.props;
    return(
      <div className={styles.root}>
        {cartProducts.length > 0
          ?
          <Card className={styles.container}>
            <div className={styles.summary}>
              <h3 className={styles.title}>Order summary:</h3>
              {cartProducts.map(product => (
                <CartItem
                  key={product._id}
                  {...product}
                  edit={false}
                  className={styles.summaryItem}>
                </CartItem>
              ))}
              <h4 className={styles.title}>Order price: {cartProducts.map(product => product.totalPrice).reduce((prev, curr) => prev + curr)}$</h4>
            </div>
            <h2 className={styles.title}>Fill form to send order:</h2>
            <form onSubmit={this.submitForm} className={styles.form}>
              <Grid>
                <Grid className={styles.formItem}>
                  <TextField
                    required
                    name="firstName"
                    id="firstName"
                    label="First name"
                    fullWidth
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid className={styles.formItem}>
                  <TextField
                    required
                    name="lastName"
                    id="lastName"
                    label="Last name"
                    fullWidth
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid className={styles.formItem}>
                  <TextField
                    required
                    type="email"
                    name="email"
                    id="email"
                    label="Email address"
                    fullWidth
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid className={styles.formItem}>
                  <TextField
                    required
                    type="number"
                    name="phone"
                    id="phone"
                    label="Phone number"
                    fullWidth
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Send Order
                <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
              </Button>
            </form>
          </Card>
          :
          <Card className={styles.containerEmpty}>
            <h3 className={styles.titleEmpty}>Your cart it is empty!</h3>
            <h4>Go to homepage</h4>
            <Button component={ Link } to={'/'} variant="contained" color="primary" className={styles.buttonEmpty}>
              Homepage
              <FontAwesomeIcon icon={faHome} className={styles.icon}/>
            </Button>
            <h4>Or check our products</h4>
            <Button component={ Link } to={'/products/'} variant="contained" color="primary" className={styles.buttonEmpty}>
              All Products
              <FontAwesomeIcon icon={faStore} className={styles.icon}/>
            </Button>
          </Card>}
      </div>
    );
  }
}

Component.propTypes = {
  cartProducts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  sendOrder: PropTypes.func,
  deleteItems: PropTypes.func,
};

const mapStateToProps = state => ({
  cartProducts: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  sendOrder: order => dispatch(fetchNewOrder(order)),
  deleteItems: order => dispatch(deleteAllCart(order)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as FormPage,
  Container as FormPage,
  Component as FormPageComponent,
};
