import React from 'react';
import PropTypes from 'prop-types';

import { AmountWidget } from '../AmountWidget/AmountWidget';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { editInCart, getOneProductFromCart, deleteFromCart } from '../../../redux/productsRedux.js';

import styles from './CartItem.module.scss';

class Component extends React.Component {

  state = {
    cart: {
      _id: this.props._id,
      category: this.props.category,
      title: this.props.title,
      price: this.props.price,
      image: this.props.image,
      amount: this.props.amount,
      totalPrice: this.props.totalPrice,
      message: '',
    },
  }


  setAmount = (amount) => {
    const { cart } = this.state;
    this.setState({ cart: { ...cart, amount: amount , totalPrice: this.props.price * amount }});

    const { editItem } = this.props;
    editItem({  ...cart, amount: amount , totalPrice: this.props.price * amount });

    const ordersFromStorage = JSON.parse(localStorage.getItem('cartItem'));
    const findedOrderFromStorage = ordersFromStorage.find(el => el._id === this.props._id);
    const findedOrderIndex = ordersFromStorage.indexOf(findedOrderFromStorage);

    findedOrderFromStorage.amount = amount;
    findedOrderFromStorage.totalPrice = findedOrderFromStorage.price * amount;

    ordersFromStorage.splice(findedOrderIndex, 1, findedOrderFromStorage);
    localStorage.setItem('cartItem', JSON.stringify(ordersFromStorage));
  }

  handleChange = (event) => {
    const { cart } = this.state;
    this.setState({ cart: { ...cart, message: event.target.value }});

    const { editItem } = this.props;
    editItem({  ...cart, message: event.target.value });

    const ordersFromStorage = JSON.parse(localStorage.getItem('cartItem'));
    const findedOrderFromStorage = ordersFromStorage.find(el => el._id === this.props._id);
    const findedOrderIndex = ordersFromStorage.indexOf(findedOrderFromStorage);

    findedOrderFromStorage.message = event.target.value;

    ordersFromStorage.splice(findedOrderIndex, 1, findedOrderFromStorage);
    localStorage.setItem('cartItem', JSON.stringify(ordersFromStorage));
  };

  deleteFromCart = (event) => {
    const { cart } = this.state;
    const { deleteItem } = this.props;
    deleteItem(cart);

    const ordersFromStorage = JSON.parse(localStorage.getItem('cartItem'));
    const findedOrderIndex = ordersFromStorage.findIndex(el => el._id === this.props._id);
    ordersFromStorage.splice(findedOrderIndex, 1);
    localStorage.setItem('cartItem', JSON.stringify(ordersFromStorage));

    if(ordersFromStorage.length < 1){
      localStorage.removeItem('cartItem');
    }

  }

  render() {
    const { title, price, image, amount, edit } = this.props;
    const { cart } = this.state;
    return(
      <Card className={styles.root}>
        <div className={styles.wrapper}>
          <div className={styles.infoBox}>
            <img src={image === undefined ? '/images/logo.png' : image} alt={title} title={title} />
            <h4>{title}</h4>
          </div>
          <div className={styles.amountBox}>
            <span>Amount: {cart.amount}</span>
            <span>Price:{cart.amount * price}$</span>
          </div>
          {edit
            ?
            <div className={styles.editBox}>
              <Card className={styles.widget}>
                <AmountWidget defaultAmount={amount} setAmount={this.setAmount}/>
                <FontAwesomeIcon icon={faTrashAlt} className={styles.icon} onClick={this.deleteFromCart}/>
              </Card>
            </div>
            : null}
        </div>
        {edit
          ?
          <TextField
            className={styles.textarea}
            id="outlined-multiline-static"
            label="Product comment"
            size="small"
            multiline
            variant="outlined"
            onChange={this.handleChange}
            inputProps={{ maxLength: 50 }}
            fullWidth
          />
          : null}
      </Card>
    );
  }
}

Component.propTypes = {
  _id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.number,
  totalPrice: PropTypes.number,
  editItem: PropTypes.func,
  productFromCart: PropTypes.func,
  deleteItem: PropTypes.func,
  edit: PropTypes.bool,
};

const mapStateToProps = (state, key) => ({
  productFromCart: getOneProductFromCart(state, key),
});

const mapDispatchToProps = dispatch => ({
  editItem: product => dispatch(editInCart(product)),
  deleteItem: product => dispatch(deleteFromCart(product)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as CartItem,
  Container as CartItem,
  Component as CartItemComponent,
};
