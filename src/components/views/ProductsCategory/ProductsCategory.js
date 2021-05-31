import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// import clsx from 'clsx';

import { Card } from '@material-ui/core';
import { ProductBox } from '../../features/ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAll, fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './ProductsCategory.module.scss';

const Component = ({ products, match, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  });

  return(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}
      className={styles.root}
    >
      <div className={styles.container}>
        <Card className={styles.card}>
          <h1>{match.params.categoryId}</h1>
          <div className={styles.products}>
            {products.filter(product => product.category === match.params.categoryId).map(product => (
              <ProductBox
                key={product._id}
                price={product.price}
                link={`/products/${product.category}/${product._id}`}
                image={`../${product.image[0]}`}
                name={product.name}
                title={product.title}
              />
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  match: PropTypes.object,
  fetchProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchProducts: product => dispatch(fetchAllProducts(product)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as ProductsCategory,
  Container as ProductsCategory,
  Component as ProductsCategoryComponent,
};
