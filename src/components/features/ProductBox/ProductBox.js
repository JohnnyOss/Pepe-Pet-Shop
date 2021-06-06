import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductBox.module.scss';

const Component = ({ image, price, link, title }) => (
  <div className={styles.box}>
    <div className={styles.imageBox}>
      <img src={image} title={title} alt={title} className={styles.image}></img>
    </div>
    <div className={styles.details}>
      <Link to={link} className={styles.link}>
        {title}
      </Link>
      <span>{price}$</span>
    </div>
  </div>

);

Component.propTypes = {
  image: PropTypes.string,
  price: PropTypes.number,
  link: PropTypes.string,
  title: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
