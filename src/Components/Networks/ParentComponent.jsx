import React, { useState } from 'react';
import ScheduleNetwork from './ScheduleNetwork';
import Networks from './Networks';
import './styles.css';

const App = () => {
  const [isViewingPerson, setIsViewingPerson] = useState(false);

  const handleViewPersonToggle = (newView) => {
    setIsViewingPerson(newView);
  };

  return (
    <div className="app-container">
      <ScheduleNetwork onViewPersonToggle={handleViewPersonToggle} />
      <Networks isViewingPerson={isViewingPerson} />
    </div>
  );
};

export default App;
