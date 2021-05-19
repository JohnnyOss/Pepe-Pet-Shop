import React from 'react';
import PropTypes from 'prop-types';

// import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartItem.module.scss';

const Component = ({title, image, amount, price}) => (
  <div className={styles.root}>
    <h2>{title}</h2>
    <img src={image} alt={title} title={title} />
    <h2>{amount*price}$</h2>
  </div>
);

Component.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartItem,
  // Container as CartItem,
  Component as CartItemComponent,
};
