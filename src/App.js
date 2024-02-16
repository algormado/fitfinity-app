import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Components/Registration/AppRouter';
import Navigation from './Components/Registration/Navigation.jsx';


const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <AppRouter />
      </div>
    </Router>
  );
};


export default App;