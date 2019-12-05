import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import store from './redux/store'

import getRouter from './router/router';

if (module.hot) {
  module.hot.accept();
}
renderWithHotReload(getRouter())
function renderWithHotReload(RootElement) {
  ReactDom.render(
    <Provider store={store}>
      {RootElement}
    </Provider>,
    document.getElementById('app')
  )
}
