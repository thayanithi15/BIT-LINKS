import React, { useState } from 'react';
import ApexChartDailyGraph from './DailyGraph';
import ApexChartMonthlyGraph from './MonthlyGraph';
import ApexChartWeeklyGraph from './WeeklyGraph';
import ApexChartYearlyGraph from './YearlyGraph';

const Graphs = () => {
  const [activeGraph, setActiveGraph] = useState('daily');

  return (
    <div>
      <div>
        <button onClick={() => setActiveGraph('daily')}>Daily</button>
        <button onClick={() => setActiveGraph('weekly')}>Weekly</button>
        <button onClick={() => setActiveGraph('monthly')}>Monthly</button>
        <button onClick={() => setActiveGraph('yearly')}>Yearly</button>
      </div>

      {activeGraph === 'daily' && <ApexChartDailyGraph />}
      {activeGraph === 'weekly' && <ApexChartWeeklyGraph />}
      {activeGraph === 'monthly' && <ApexChartMonthlyGraph />}
      {activeGraph === 'yearly' && <ApexChartYearlyGraph />}
    </div>
  );
};

export default Graphs;
