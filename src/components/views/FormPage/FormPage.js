import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import { NotFound } from '../NotFound/NotFound';
import { CartItem } from '../../features/CartItem/CartItem';

// import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/productsRedux.js';
import { saveOrder } from '../../../redux/ordersRedux';

import styles from './FormPage.module.scss';

class Component extends React.Component {
  state = {
    order: {
      orderItems: this.props.cartProducts,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      orderDate: '',
    },
  }

  handleSumbit = () => {
  }

  render() {
    const { cartProducts } = this.props;
    return(
      <div className={styles.root}>
        {cartProducts.length > 0
          ?
          <Card className={styles.container}>
            <div className={styles.summary}>
              <h3 className={styles.title}>Order summary:</h3>
              {cartProducts.map(product => (
                <CartItem
                  key={product.id}
                  {...product}
                  edit={false}
                  className={styles.summaryItem}>
                </CartItem>
              ))}
              <h4 className={styles.title}>Order price: {cartProducts.map(product => product.totalPrice).reduce((prev, curr) => prev + curr)}$</h4>
            </div>
            <h2 className={styles.title}>Fill form to send order:</h2>
            <form className={styles.form}>
              <Grid>
                <Grid className={styles.formItem}>
                  <TextField
                    required
                    name="firstName"
                    id="firstName"
                    label="First name"
                    fullWidth
                  />
                </Grid>
                <Grid className={styles.formItem}>
                  <TextField
                    required
                    name="lastName"
                    id="lastName"
                    label="Last name"
                    fullWidth
                  />
                </Grid>
                <Grid className={styles.formItem}>
                  <TextField
                    required
                    type="email"
                    name="email"
                    id="email"
                    label="Email address"
                    fullWidth
                  />
                </Grid>
                <Grid className={styles.formItem}>
                  <TextField
                    required
                    type="phone"
                    name="phone"
                    id="phone"
                    label="Phone number"
                    fullWidth
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={styles.button}
              >
                Send Order
                <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
              </Button>
            </form>
          </Card>
          :
          <NotFound />}
      </div>
    );
  }
}

// const Component = ({cartProducts}) => (
//   <div className={styles.root}>
//     {cartProducts.length > 0
//       ?
//       <Card className={styles.container}>
//         <div className={styles.summary}>
//           <h3 className={styles.title}>Order summary:</h3>
//           {cartProducts.map(product => (
//             <CartItem
//               key={product.id}
//               {...product}
//               edit={false}
//               className={styles.summaryItem}>
//             </CartItem>
//           ))}
//         </div>
//         <h2 className={styles.title}>Fill form to send order:</h2>
//         <Formik
//           initialValues={{
//             firstName: '',
//             surname: '',
//             phone: '',
//             email: '',
//             orderData: '',
//           }}
//           validationSchema={Yup.object().shape({
//             firstName: Yup.string().required('First name is required'),
//             surname: Yup.string().required('Surname is required'),
//             author: Yup.string().required()
//               .email()
//               .required('Enter valid email'),
//             phone: Yup.number()
//               .positive()
//               .integer(),
//           })}
//         >
//           {({ handleChange, errors, touched, values }) => (
//             <Form className={styles.form}>
//               <Grid className={styles.formItem}>
//                 <TextField
//                   required
//                   name="firstName"
//                   id="firstName"
//                   label="First name"
//                   value={values.firstName}
//                   fullWidth
//                   onChange={handleChange}
//                   error={errors.firstName && touched.firstName ? true : false}
//                 />
//               </Grid>
//               <Grid className={styles.formItem}>
//                 <TextField
//                   required
//                   name="surname"
//                   id="surname"
//                   label="Surname"
//                   value={values.surname}
//                   fullWidth
//                   onChange={handleChange}
//                   error={errors.surname && touched.surname ? true : false}
//                 />
//               </Grid>
//               <Grid className={styles.formItem}>
//                 <TextField
//                   required
//                   type="email"
//                   name="email"
//                   id="email"
//                   label="Email address"
//                   value={values.email}
//                   fullWidth
//                   onChange={handleChange}
//                   error={errors.email && touched.email ? true : false}
//                 />
//               </Grid>
//               <Grid className={styles.formItem}>
//                 <TextField
//                   required
//                   type="phone"
//                   name="phone"
//                   id="phone"
//                   label="Phone number"
//                   value={values.phone}
//                   fullWidth
//                   onChange={handleChange}
//                   error={errors.phone && touched.phone ? true : false}
//                 />
//               </Grid>
//             </Form>
//           )}
//         </Formik>
//         <Button
//           variant="contained"
//           color="primary"
//           className={styles.button}
//         >
//           Send Order
//           <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
//         </Button>
//       </Card>
//       :
//       <NotFound />}
//   </div>
// );

Component.propTypes = {
  cartProducts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  sendOrder: PropTypes.func,
};

const mapStateToProps = state => ({
  cartProducts: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  sendOrder: order => dispatch(saveOrder(order)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as FormPage,
  Container as FormPage,
  Component as FormPageComponent,
};
