import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import { createMuiTheme, StylesProvider, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import { store } from './redux/store';

import { MainLayout } from './components/layout/MainLayout/MainLayout';
import { Homepage } from './components/views/Homepage/Homepage';
import { AllProducts } from './components/views/AllProducts/AllProducts';
import { ProductPage } from './components/views/ProductPage/ProductPage';
import { ProductsCategory } from './components/views/ProductsCategory/ProductsCategory';
import { Cart } from './components/views/Cart/Cart';
import { FormPage } from './components/views/FormPage/FormPage';
import { About } from './components/views/About/About';
import { NotFound } from './components/views/NotFound/NotFound';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#EF2940' },
  },
});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/products' component={AllProducts} />
                <Route exact path='/products/:categoryId' component={ProductsCategory} />
                <Route exact path='/products/:categoryId/:id' component={ProductPage} />
                <Route exact path='/cart' component={Cart} />
                <Route exact path='/form' component={FormPage} />
                <Route exact path='/about' component={About} />
                <Route path='*' component={NotFound} />
              </Switch>
            </AnimatePresence>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  </Provider>
);

export { App };
