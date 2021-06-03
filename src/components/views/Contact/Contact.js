import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

const Component = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}}
    className={styles.root}
  >
    <Card className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <h2>Adress:</h2>
          <p>Keilisbraut 777<br></br>
            Asbru<br></br>
            391 Reykjanesbaer<br></br>
            Iceland</p>
          <h3>Fax:</h3>
          <p>522-432-4341</p>
          <h3>Customer Service:</h3>
          <p>522-432-4342</p>
          <h3>Office:</h3>
          <p>522-432-4343</p>
          <h3>Production:</h3>
          <p>522-432-4344</p>
          <h3>General email:</h3>
          <p>pepesshop@pepes.com</p>
          <h3>Feedback:</h3>
          <p>feedback@pepes.com</p>
          <h3>Complains:</h3>
          <p>complains@pepes.com</p>
        </div>
        <Card className={styles.map}>
          <div className={styles.image}>
            <h2 className={styles.title}>Where can you find us:</h2>
            <img src='/images/map.png' alt='map' title='map' />
          </div>
          <div className={styles.socialmedia}>
            <h3>Check our socialmedia:</h3>
            <Link to="#">
              <FontAwesomeIcon icon={faFacebook} className={clsx(styles.icon, styles.facebook)}/>
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faTwitter} className={clsx(styles.icon, styles.twitter)}/>
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faInstagram} className={clsx(styles.icon, styles.instagram)}/>
            </Link>
            <Link to="#">
              <FontAwesomeIcon icon={faPinterest} className={clsx(styles.icon, styles.pinterest)}/>
            </Link>
          </div>
        </Card>
      </div>
    </Card>
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
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
