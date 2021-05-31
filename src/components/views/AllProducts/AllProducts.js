import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// import clsx from 'clsx';

import { Card } from '@material-ui/core';
import { ProductBox } from '../../features/ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAll, fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './AllProducts.module.scss';

class Component extends React.Component {

  componentDidMount() {
    const { allProducts } = this.props;
    allProducts();
  }

  render() {
    const { products } = this.props;
    return(
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        className={styles.root}
      >
        <div className={styles.container}>
          <Card className={styles.card}>
            <h1>All Products</h1>
            <div className={styles.products}>
              {products.map(product => (
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
  }
}

Component.propTypes = {
  products: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  allProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  allProducts: arg => dispatch(fetchAllProducts(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as AllProducts,
  Container as AllProducts,
  Component as AllProductsComponent,
};
