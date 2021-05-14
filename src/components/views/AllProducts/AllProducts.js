import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';

import { ProductBox } from '../../features/ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './AllProducts.module.scss';

const Component = ({ products }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <h1>All Products</h1>
      <div className={styles.products}>
        {products.map(product => (
          <ProductBox
            key={product.id}
            price={product.price}
            link={`/products/${product.category}/${product.id}`}
            image={`../${product.image[0]}`}
            name={product.name}
            title={product.title}
          />
        ))}
      </div>
    </div>
  </div>
);

Component.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as AllProducts,
  Container as AllProducts,
  Component as AllProductsComponent,
};
