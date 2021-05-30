import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCategories, fetchCategories } from '../../../redux/categoriesRedux';

import styles from './CategoriesBox.module.scss';

class Component extends React.Component {
  componentDidMount() {
    const { fetchCategories } = this.props;
    fetchCategories();
  }

  render() {
    const { categories } = this.props;
    return(
      <div className={styles.root}>
        <Card>
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
        </Card>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  fetchCategories: PropTypes.func,
};

const mapStateToProps = state => ({
  categories: getCategories(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: arg => dispatch(fetchCategories(arg)),
});

const Container = connect(mapStateToProps,mapDispatchToProps)(Component);

export {
  // Component as CategoriesBox,
  Container as CategoriesBox,
  Component as CategoriesBoxComponent,
};
