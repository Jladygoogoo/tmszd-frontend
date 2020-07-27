import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/bootstrap.css'
import './css/additional.css'

import BaseRouter from './routes';
import CustomLayout from './containers/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
