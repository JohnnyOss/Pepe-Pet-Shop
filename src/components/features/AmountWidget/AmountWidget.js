import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

// import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './AmountWidget.module.scss';

const Component = ({setAmount, defaultAmount}) => {
  const [count, setCount] = useState(defaultAmount || 0);

  const orderAmount = amount => {
    if (amount === undefined) {
      return 0;
    } else if (amount < 0) {
      return 0;
    } else {
      return amount;
    }
  };

  const handleOnChange = event => {
    setCount(event);
    setAmount(event);
  };

  const handleMinus = () => {
    setCount(Math.max(count - 1, 0));
    setAmount(Math.max(count - 1, 0));
  };

  const handlePlus = () => {
    setCount(parseInt(count) + 1);
    setAmount(parseInt(count) + 1);
  };

  return (
    <div className={styles.root}>
      <Button
        variant="contained"
        color="primary"
        className={styles.inputButton}
        disabled={parseInt(count) <= 0 ? true : false}
        aria-label="reduce"
        onClick={() => {
          handleMinus();
        }}
      >
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <input
        className={styles.inputNumber}
        type='text'
        min='0'
        value={orderAmount(count)}
        onChange={event => handleOnChange(event.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className={styles.inputButton}
        aria-label="add"
        onClick={() => {
          handlePlus();
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  setAmount: PropTypes.func,
  defaultAmount: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as AmountWidget,
  // Container as AmountWidget,
  Component as AmountWidgetComponent,
};
