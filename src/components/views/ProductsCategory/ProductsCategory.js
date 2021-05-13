import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';

import { ProductBox } from '../../features/ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './ProductsCategory.module.scss';

const Component = ({ products, match }) => (
  <div className={styles.root}>
    <div className={styles.container}>
      <h1>{match.params.categoryId}</h1>
      <div className={styles.products}>
        {products.filter(product => product.category === match.params.categoryId).map(product => (
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
  className: PropTypes.string,
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  match: PropTypes.object,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as ProductsCategory,
  Container as ProductsCategory,
  Component as ProductsCategoryComponent,
};
