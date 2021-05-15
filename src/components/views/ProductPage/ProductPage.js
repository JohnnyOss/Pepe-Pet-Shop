import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { AmountWidget } from '../../features/AmountWidget/AmountWidget';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOneProduct } from '../../../redux/productsRedux.js';

import styles from './ProductPage.module.scss';

const Component = ({product}) => {

  const [amount, setAmount] = useState(0);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Carousel className={styles.slider}>
            <div>
              <img src={product.image[0]} alt={product.title} title={product.title}/>
            </div>
            <div>
              <img src={product.image[1]} alt={product.title} title={product.title}/>
            </div>
            <div>
              <img src={product.image[2]} alt={product.title} title={product.title}/>
            </div>
          </Carousel>
          <Card className={styles.information}>
            <h2>{product.title}</h2>
            <div>{product.description}</div>
            <p>Price: {product.price}$</p>
            <Card className={styles.order}>
              <h2>Order</h2>
              <div>
                <h3>Amount:</h3>
                <AmountWidget setAmount={setAmount}/>
                <h3>Price: ${amount * product.price}</h3>
                <Button
                  variant="contained"
                  color="primary"
                >
                  Add to cart
                  <FontAwesomeIcon icon={faCartPlus} className={styles.icon}/>
                </Button>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  product: PropTypes.object,
};

const mapStateToProps = (state, props) => ({
  product: getOneProduct(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ProductPage,
  Container as ProductPage,
  Component as ProductPageComponent,
};
