import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { motion } from 'framer-motion';

// import clsx from 'clsx';

import styles from './NotFound.module.scss';

const Component = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}}
    className={styles.root}
  >
    <div className={styles.container}>
      <div className={styles.text}>
        <h3>Oops!<br></br> Our dog ate this page!</h3>
        <Button component={ Link } to={'/'} variant="contained" color="primary" className={styles.button}>Homepage</Button>
      </div>
      <img src="/images/notfound.png" alt='Logo' title='Oops!' className={styles.image}/>
    </div>
  </motion.div>
);

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
