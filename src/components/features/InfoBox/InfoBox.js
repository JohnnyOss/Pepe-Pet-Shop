import React from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faMoneyBillWave, faHeadset } from '@fortawesome/free-solid-svg-icons';

// import clsx from 'clsx';

import styles from './InfoBox.module.scss';

const Component = () => (
  <div className={styles.root}>
    <Card className={styles.container}>
      <Card className={styles.box}>
        <div className={styles.boxIcon}>
          <FontAwesomeIcon icon={faTruck} className={styles.icon} />
        </div>
        <div>
          <h2>Free shipping</h2>
          <p>On all orders!</p>
        </div>
      </Card>
      <Card className={styles.box}>
        <div className={styles.boxIcon}>
          <FontAwesomeIcon icon={faMoneyBillWave} className={styles.icon} />
        </div>
        <div>
          <h2>30-day refund</h2>
          <p>If you change your mind you can refund the products</p>
        </div>
      </Card>
      <Card className={styles.box}>
        <div className={styles.boxIcon}>
          <FontAwesomeIcon icon={faHeadset} className={styles.icon} />
        </div>
        <div>
          <h2>24/7 support</h2>
          <p>We are always ready to assist you</p>
        </div>
      </Card>
    </Card>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as InfoBox,
  Component as InfoBoxComponent,
};
