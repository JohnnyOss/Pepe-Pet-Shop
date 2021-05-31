import React from 'react';
import PropTypes from 'prop-types';

import { Carousel } from '../../features/Carousel/Carousel';
import { CategoriesBox } from '../../features/CategoriesBox/CategoriesBox';
import { motion } from 'framer-motion';

// import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const Component = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}}
    className={styles.root}
  >
    <div className={styles.container}>
      <Carousel />
      <CategoriesBox />
    </div>
  </motion.div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
