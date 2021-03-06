import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

import { AmountWidget } from '../../features/AmountWidget/AmountWidget';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Snackbar from '@material-ui/core/Snackbar';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOneProduct, addToCart, fetchOneProduct } from '../../../redux/productsRedux.js';

import styles from './ProductPage.module.scss';

class Component extends React.Component {
  state = {
    cart: {
      _id: this.props.product._id,
      category: this.props.product.category,
      title: this.props.product.title,
      description: this.props.product.description,
      price: this.props.product.price,
      image1: this.props.product.image,
      amount: 0,
      totalPrice: 0,
      message: '',
    },
    open: false,
  }

  componentDidMount() {
    const { fetchProduct } = this.props;
    fetchProduct();
  }

  setAmount = (amount) => {
    const { cart } = this.state;
    this.setState({cart: { ...cart, amount: amount , totalPrice: this.props.product.price * amount }});
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = (state) => {
    this.setState({ ...state, open: false });
  };

  sendToCart = (event) => {
    const { cart } = this.state;
    const { addToCart, product } = this.props;

    cart._id = product._id;
    cart.category = product.category;
    cart.title = product.title;
    cart.description = product.description;
    cart.price = product.price;
    cart.image = product.image[0];

    if (cart.amount > 0) {
      addToCart(cart);
      this.handleOpen();

      const cartItem = [
        {
          _id: cart._id,
          category: cart.category,
          title: cart.title,
          description: cart.city,
          price: cart.price,
          image: cart.image,
          amount: cart.amount,
          totalPrice: cart.totalPrice,
        },
      ];

      if(localStorage.getItem('cartItem') !== null) {
        const fromStorage = JSON.parse(localStorage.getItem('cartItem'));
        fromStorage.push(cartItem[0]);
        localStorage.setItem('cartItem', JSON.stringify(fromStorage));
      } else {
        localStorage.setItem('cartItem', JSON.stringify(cartItem));
      }
    } else {
      alert('Wrong amount');
    }
  }

  render () {
    const { product } = this.props;
    const { cart, open } = this.state;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        className={styles.root}
      >
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Carousel className={styles.slider}>
              <div>
                <img src={product.image === undefined ? '/images/logo.png' : product.image[0]} alt={product.title} title={product.title}/>
              </div>
              <div>
                <img src={product.image === undefined ? '/images/logo.png' : product.image[1]} alt={product.title} title={product.title}/>
              </div>
              <div>
                <img src={product.image === undefined ? '/images/logo.png' : product.image[2]} alt={product.title} title={product.title}/>
              </div>
            </Carousel>
            <Card className={styles.information}>
              <h2>{product.title}</h2>
              <div>{product.description}</div>
              <p>Price: {product.price}$</p>
              <Card className={styles.order}>
                <h4>Order</h4>
                <div>
                  <h5>Amount:</h5>
                  <AmountWidget setAmount={this.setAmount}/>
                  <h5>Price: ${cart.amount * product.price}</h5>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.sendToCart}
                  >
                    Add to cart
                    <FontAwesomeIcon icon={faCartPlus} className={styles.icon}/>
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    message="Product added to cart"
                    className={styles.snackbar}
                  />
                </div>
              </Card>
            </Card>
          </div>
        </div>
      </motion.div>
    );
  }
}

Component.propTypes = {
  product: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  addToCart: PropTypes.func,
  fetchProduct: PropTypes.func,
  handleOpen: PropTypes.func,
};

const mapStateToProps = (state) => ({
  product: getOneProduct(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addToCart: add => dispatch(addToCart(add)),
  fetchProduct: () => dispatch(fetchOneProduct(props.match.params.id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};
