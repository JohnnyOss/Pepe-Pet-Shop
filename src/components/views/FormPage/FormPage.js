import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faHome, faStore } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Snackbar from '@material-ui/core/Snackbar';

import { CartItem } from '../../features/CartItem/CartItem';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { fetchNewOrder } from '../../../redux/ordersRedux';

import styles from './FormPage.module.scss';

class Component extends React.Component {
  state = {
    order: {
      orderItems: this.props.cartContent,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      orderDate: '',
      totalPrice: '',
    },
    open: false,
  }

  handleChange = (event) => {
    const { order } = this.state;
    this.setState({ order: { ...order, [event.target.name]: event.target.value } });
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = (state) => {
    this.setState({ ...state, open: false });
  };

  submitForm = (event) => {
    event.preventDefault();
    const { order } = this.state;
    const { sendOrder } = this.props;
    const cartContent = JSON.parse(localStorage.getItem('cartItem'));
    const orderItems = cartContent;

    if(order.firstName.length < 3) return alert('Min. 3 characters in first name');
    if(order.lastName.length < 3) return alert('Min. 3 characters in last name');
    if(order.phone < 0 || order.phone.length < 6 || order.phone.length > 13 ) return alert('Wrong phone number');

    if((order.firstName.length > 2) && (order.lastName.length > 2) && order.email && (order.phone > 0 && order.phone.length > 5 && order.phone.length < 14)) {
      const today = new Date();
      order.orderItems = orderItems;
      order.orderDate = today;
      order.totalPrice = cartContent.map(product => product.totalPrice).reduce((prev, curr) => prev + curr);
      sendOrder(order);
      this.handleOpen();
      if(localStorage.getItem('cartItem')) {
        localStorage.removeItem('cartItem');
      }
    } else {
      alert('Please fill required fields');
    }
  }

  render() {
    const { open } = this.state;
    const cartContent = JSON.parse(localStorage.getItem('cartItem'));
    return(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        className={styles.root}
      >
        <Card className={styles.container}>
          {cartContent !== null
            ?
            <h3 className={styles.title}>Order summary:</h3>
            :
            null}
          <div className={styles.summary}>
            {cartContent === null ? null : cartContent.map(product => (
              <CartItem
                key={product._id}
                {...product}
                edit={false}
                className={styles.summaryItem}>
              </CartItem>
            ))}
          </div>
          {cartContent !== null
            ?
            <div>
              <h4 className={styles.title}>Order price: {cartContent.map(product => product.totalPrice).reduce((prev, curr) => prev + curr)}$</h4>
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
            </div>
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
              <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={this.handleClose}
                message="Your order has been sended"
                className={styles.snackbar}
              />
            </Card>}
        </Card>
      </motion.div>
    );
  }
}

Component.propTypes = {
  cartContent: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  sendOrder: PropTypes.func,
  deleteItems: PropTypes.func,
};

// const mapStateToProps = state => ({
// });

const mapDispatchToProps = dispatch => ({
  sendOrder: order => dispatch(fetchNewOrder(order)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as FormPage,
  Container as FormPage,
  Component as FormPageComponent,
};
