import React from 'react';

import WelcomeBanner from './components/WelcomeBanner.jsx';
import CourseSummary from './components/CourseSummary.jsx';
import ResourceList from './components/ResourceList.jsx';
import { LabOverview } from './components/LabOverview.jsx';

const WELCOME= {
  course: "IN432 React Lab 01",
  instructor: "Dr. Kamal",
  term: "Fall Term",
  description: "Advanced Web Technologies - React Fundamentals"
};

const CURRENT_LAB = {
  title: "Current Lab",
  topics: ["JSX Basics", "Rendering", "Components"],
  duration: '90 minutes',
  deliveryMode: 'In-person',
  note: 'Focus on writing semantic JSX and using the lab theme classes.'
};

const NEXT_LAB = {
  title: "Next Lab",
  topics: 'Props & Reusable Components',
  duration: '90 minutes',
  deliveryMode: 'In-person',
  note: 'Prepare questions about prop drilling and component structure.'
};

const LAB_RESOURCES = [
  { id: 'guide', title: 'Lab Instructions', description: 'Step-by-step guide stored in React_Lab_Ch01-05_Student.md.' },
  { id: 'slides', title: 'Slides Chapters 01-05', description: 'Overview of key concepts covered so far.', badge:"IMPORTANT"},
  { id: 'cheatsheet', title: 'JSX Cheatsheet', description: 'Common patterns and syntax reminders.' },
  { id: 'css', title: 'Lab Theme Styles', description: 'Reference for available CSS classes.', badge: "NEW" }
];

function App() {
  return (
    <main className="layout">
      <LabOverview welcome={WELCOME} current={CURRENT_LAB} upcoming={NEXT_LAB} resources={LAB_RESOURCES} />
    </main>
  );
}

export default App;

