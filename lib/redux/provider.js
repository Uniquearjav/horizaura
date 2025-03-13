'use client';

import { Provider } from 'react-redux';
import { store } from './store';  // Make sure this import is correct

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}