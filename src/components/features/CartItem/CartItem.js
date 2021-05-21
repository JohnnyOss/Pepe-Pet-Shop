import React from 'react';
import PropTypes from 'prop-types';

import { AmountWidget } from '../AmountWidget/AmountWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { editInCart, getOneProductFromCart, addToCart } from '../../../redux/productsRedux.js';

import styles from './CartItem.module.scss';

class Component extends React.Component {

  state = {
    cart: {
      id: this.props.id,
      category: this.props.category,
      title: this.props.title,
      price: this.props.price,
      image: this.props.image,
      amount: this.props.amount,
      message: '',
    },
  }


  setAmount = (amount) => {
    const { cart } = this.state;
    this.setState({ cart: { ...cart, amount: amount }});

    const { editItem } = this.props;
    editItem({  ...cart, amount: amount });
    // console.log('cart', cart);
    // addToCart(cart);
  }

  handleChange = (event) => {
    const { cart } = this.state;
    this.setState({ cart: { ...cart, message: event.target.value }});

    const { editItem } = this.props;
    editItem({  ...cart, message: event.target.value });
    // console.log('cart', cart);
    // addToCart(cart);
  };

  render() {
    const { title, price, image, amount } = this.props;
    const { cart } = this.state;
    return(
      <Card className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.infoBox}>
            <img src={image} alt={title} title={title} />
            <h4>{title}</h4>
          </div>
          <Card className={styles.priceBox}>
            <h4>{cart.amount * price}$</h4>
            <AmountWidget defaultAmount={amount} setAmount={this.setAmount}/>
            <FontAwesomeIcon icon={faTrashAlt} className={styles.icon}/>
          </Card>
        </div>
        <div className={styles.message}>
          <TextField
            className={styles.textarea}
            id="outlined-multiline-static"
            label="Message about product"
            multiline
            rows={1}
            variant="outlined"
            onChange={this.handleChange}
            inputProps={{ maxLength: 50 }}
          />
        </div>
      </Card>
    );
  }
}

Component.propTypes = {
  id: PropTypes.number,
  category: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.number,
  editItem: PropTypes.func,
  productFromCart: PropTypes.func,
  addToCart: PropTypes.func,
};

const mapStateToProps = (state, key) => ({
  productFromCart: getOneProductFromCart(state, key),
});

const mapDispatchToProps = dispatch => ({
  editItem: edit => dispatch(editInCart(edit)),
  addToCart: add => dispatch(addToCart(add)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent,
};
