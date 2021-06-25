import React from 'react';
// i18next transleter
import './i18next'
// context
import { AuthProvider } from './context/auth';
// componet
import Navigation from './component';
// style
import {bodyStyle} from './style'

const App = () => {
  return (
    <div className={bodyStyle}>
      <AuthProvider>
        <Navigation  />
      </AuthProvider>
    </div>
  );
}

export default App;
