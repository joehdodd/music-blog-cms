import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Post from '../components/Post';
import { Provider } from 'react-redux';
import configureStore from '../state/configureStore';

const store = configureStore();

test('renders mock post data', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Post />
      </BrowserRouter>
    </Provider>
  );
});
