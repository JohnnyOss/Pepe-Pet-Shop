import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Footer.module.scss';

const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.contact}>
          <h3>Contact</h3>
          <h5>Adress:</h5>
          <p>Keilisbraut 777<br></br>
          Asbru<br></br>
          391 Reykjanesbaer</p>
          <h5>Phone:</h5>
          <p>522-432-4342</p>
        </div>
        <div className={styles.navigation}>
          <h3>Menu</h3>
          <ul className={styles.menu}>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/products'}>Our products</Link></li>
            <li><Link to='#'>About Us</Link></li>
            <li><Link to='#'>Contact</Link></li>
            <li><Link to='#'>Our blog</Link></li>
          </ul>
        </div>
        <div className={styles.socialmedia}>
          <h3>Newsletter</h3>
          <div className={styles.newsletter}>
            <input type="email" placeholder="email address" className={styles.email}/>
            <div>
              <Button variant="contained" color="secondary">
                Sign up!
              </Button>
            </div>
          </div>
          <h3>Find Us in socialmedia</h3>
          <div>
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
        </div>
      </div>
      <div className={styles.rights}>
        Ⓒ 2021 Jan Ossoliński. All Right reserved
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
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
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
