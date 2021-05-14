import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';

import styles from './CategoriesBox.module.scss';

const Component = ({categories}) => (
  <div className={styles.root}>
    <h2 className={styles.header}>Categories of our products</h2>
    <div className={styles.categories}>
      {categories.map((category, index) => (
        <div key={index} className={styles.box}>
          <img src={`../${category.image}`} title={category.name} alt={category.name} className={styles.image}></img>
          <Link to={`/products/${category.name}`} className={styles.link}>
            {category.name}
          </Link>
        </div>
      ))}
    </div>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  categories: getCategories(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as CategoriesBox,
  Container as CategoriesBox,
  Component as CategoriesBoxComponent,
};
