import './App.css';
import { CourseCard } from './components/CourseCard';
import Header from './components/Header';
import courses from './data/courses'; 
import { useState } from 'react';
import { filterCourses } from "./utils/filterCourses";

function App() {
  const [enrolledIds, setEnrolledIds] = useState([]);
  function toggleEnrol(id) { 
    setEnrolledIds(prev => 
      prev.includes(id) 
      ? prev.filter(x => x !== id)   // already enrolled -> remove it 
      : [...prev, id]                // not enrolled -> add it 
    ); 
  } 
  const enrolledCourses = courses.filter(c => enrolledIds.includes(c.id)); 
  const totalCredits = enrolledCourses.reduce((sum, c) => sum + c.credits, 0);
  // for the filter 
  const [query, setQuery] = useState(''); 
  const [level, setLevel] = useState('All'); 
  const visibleCourses = filterCourses(courses, query, level); 
  return (
    <div className="app">
      <Header count={enrolledCourses.length} credits={totalCredits} /> 

      <div className="toolbar"> 
        <input className="toolbar__search" type="search" placeholder="Search by title or code" value={query} onChange={e => setQuery(e.target.value)} /> 
        <select className="toolbar__select" value={level} onChange={e => setLevel(e.target.value)}> 
          <option>All</option> 
          <option>Beginner</option> 
          <option>Intermediate</option> 
          <option>Advanced</option> 
        </select> 
      </div> 
 
      {visibleCourses.length === 0 && <p className="empty">No courses available</p>}
      <section className="grid">
        {visibleCourses.map(course => {
          return(
            <CourseCard key={course.id} {...course} 
                enrolled={enrolledIds.includes(course.id)} 
                onToggle={() => toggleEnrol(course.id)} />
          );            
        })}
      </section>
    </div>
  );
}

export default App;