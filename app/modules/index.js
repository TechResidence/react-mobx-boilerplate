import React, { Component, cloneElement } from 'react';
import { useStrict } from 'mobx';
useStrict();
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Header from 'components/Header';
import styles from './sharedStyles.css';

import { store as noteStore } from './Notes';
import { store as timerStore } from './Timer';
import { store as dashboardStore } from './Dashboard';

export default function App({ children }) {
  return (
    <div>
      <Header />
      <main role="main" className={styles.main}>
        <Provider {...{ noteStore, timerStore, dashboardStore}}>
          {children}
        </Provider>
      </main>
      <DevTools position={{ bottom: 0, right: 20 }} />
    </div>
  );
}