import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FitType from './Components/FitType.jsx';
import Reminder from './Components/Reminder.jsx'
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';
import AppRouter from './Components/AppRouter';
import Navigation from './Components/Navigation.jsx';
import WorkoutPlanDetails from './Components/WorkoutPlanDetails/WorkoutPlanDetails.jsx';
import ProgressTracker from './Components/ProgressTracker';
import ExerciseTracker from './Components/ExerciseTracker';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <AppRouter />
      </div>
      <div style={{ marginLeft: '75%' }}>
        <h1>Reminders!</h1>
        <Reminder />
      </div>
      <div className='mb-3'>
        <Link to='/fittype'>
          <button style={{ Top: '0', marginLeft: '10%', zIndex: 999 }}>
            Go to FitType
          </button>
        </Link>
        <Link to='/Progress-Tracker'>
          <button style={{ Top: '0', marginLeft: '10%', zIndex: 999 }}>
            Progress-Tracker
          </button>
        </Link>
        <Link to='/Exercise-tracker'>
          <button style={{ Top: '0', marginLeft: '10%', zIndex: 999 }}>
            Exercise-Tracker
          </button>
        </Link>
      </div>
      <div className='App'>
        <ImageSlider />
        <h1 className='text-4xl font-bold text-center mt-12 mb-3'>
          My Exercise Plan
        </h1>
        <hr
          className='mx-auto w-auto'
          style={{ borderTop: '3px dotted #f04c0c', width: '220px' }}
        />
        <Routes>
          <Route path='/' element={<WorkoutPlanList />} />
          <Route path='/workout/:id' element={<WorkoutPlanDetails />} />
          <Route path='/fittype' element={<FitType />} />
          <Route path='/Progress-tracker' element={<ProgressTracker />} />
          <Route path='/Exercise-tracker' element={<ExerciseTracker />} />
        </Routes>
        <Routes></Routes>
      </div>
    </Router>
  );
};

export default App;