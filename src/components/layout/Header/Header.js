import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Badge from '@material-ui/core/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCategories } from '../../../redux/categoriesRedux';
import { getCart } from '../../../redux/productsRedux';

import styles from './Header.module.scss';

const Component = ({className, categories}) => {
  const cartAmount = JSON.parse(localStorage.getItem('cartItem'));

  return(
    <div className={clsx(className, styles.root)}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to={'/'}>
            <img src="/images/logo.png" alt='Logo' title='Pepes Pet Shop' />
          </Link>
        </div>
        <div className={styles.navigation}>
          <ul>
            <li>
              <Link to={'/products/'} className={styles.allproducts}>
                Our products
              </Link>
              <ul>
                {categories.map((category, index) => (
                  <li key={index}>
                    <Link to={`/products/${category.name}`}>
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link to={'/about/'} className={styles.allproducts}>
                About us
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={styles.cart}>
          <Link to={'/cart'} className={styles.link}>
            <Badge badgeContent={cartAmount === null ? null : cartAmount.length} color="primary" showZero>
              <FontAwesomeIcon icon={faShoppingCart} className={styles.icon}/>
            </Badge>
          </Link>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapStateToProps = state => ({
  categories: getCategories(state),
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
