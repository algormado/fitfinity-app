import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import ImageSlider from '../ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from '../WorkoutPlanList/WorkoutPlanList.jsx';
import WorkoutPlanDetails from '../WorkoutPlanDetails/WorkoutPlanDetails.jsx';
import ProgressTracker from '../ProgressTracker';
import ExerciseTracker from '../ExerciseTracker';


const Dashboard = () => {
  return (
    <div className="App">
    <ProgressTracker />
    <ExerciseTracker />
      <h2>Welcome to the Dashboard!</h2>
      <Router>
      <div className='App'>
        <ImageSlider />
        <h1 className='text-4xl font-bold text-center mt-12 mb-3'>
          My Exercise Plan
        </h1>
        <hr className='mx-auto w-auto' style={{borderTop:'3px dotted #f04c0c', width:'220px'}} />
        <Routes>
          <Route path='/' element={<WorkoutPlanList />} />
          <Route path='/workout/:id' element={<WorkoutPlanDetails />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default Dashboard;