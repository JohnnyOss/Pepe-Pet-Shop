import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOneProduct } from '../../../redux/productsRedux.js';

import styles from './ProductPage.module.scss';

class Component extends React.Component {
  render() {
    const { product } = this.props;
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
            <div className={styles.information}>
              <h2>{product.title}</h2>
              <div>{product.description}</div>
              <p>Price: <br></br>{product.price}$</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

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
