/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faWheelchair, faHourglassStart, faSmileBeam, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

// import clsx from 'clsx';

import styles from './About.module.scss';

const Component = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}}
    className={styles.root}
  >
    <div className={styles.container}>
      <div className={styles.about}>
        <div className={styles.title}>
          <h1>About us</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.boxAbout}>
            <FontAwesomeIcon icon={faHourglassStart} className={styles.icon} />
            <h3>Since 2017</h3>
            <p>We have been operating on the market since 2017, dynamically developing and expanding our reach in the industry</p>
          </div>
          <div className={styles.boxAbout}>
            <FontAwesomeIcon icon={faSmileBeam} className={styles.icon} />
            <h3>Satisfied customers</h3>
            <p>Our main goal is to ensure the highest possible satisfaction for our customers and their pets</p>
          </div>
          <div className={styles.boxAbout}>
            <FontAwesomeIcon icon={faAtom} className={styles.icon} />
            <h3>Own designs</h3>
            <p>Our company is engaged in research and design of new products under its own brand <span>Pepe's</span>.</p>
          </div>
          <div className={styles.boxAbout}>
            <FontAwesomeIcon icon={faWheelchair} className={styles.icon} />
            <h3>We give chances</h3>
            <p>In our team, we employ people with disabilities to give them a chance for personal development!</p>
          </div>
        </div>
      </div>
      <div className={styles.motto}>
        <div className={styles.boxMotto}>
          <img src='/images/about-portret.jpg' title='Pepe' alt='Pepe'></img>
          <p><span>Pepe's Pet Shop</span> it is not just business, it is a new way of your pets lifestyle</p>
          <p>Pepe West - CEO & Founder of Pepe's Pet Shop</p>
        </div>
      </div>
      <div className={styles.contact}>
        <h1>Do you have any questions?</h1>
        <h5>Check on our contact subpage how you can contact with us.</h5>
        <Button component={ Link } to={'/contact/'}
          variant="contained"
          color="primary"
          className={styles.button}
        >
          Contact us
          <FontAwesomeIcon icon={faEnvelopeOpenText} className={styles.icon}/>
        </Button>
      </div>
    </div>
  </motion.div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as About,
  Component as AboutComponent,
};
