import './App.css';
import { CourseCard } from './components/CourseCard';
import Header from './components/Header';
import courses from './data/courses'; 


function App() {
    return (
      <div className="app">
        <Header />
        {courses.length === 0 && <p className="empty">No courses available</p>}
        <section className="grid">
          {courses.map(course => {
            return(
              <CourseCard key={course.id} code={course.code} title={course.title} instructor={course.instructor} credits={course.credits} level={course.level} />
            );            
          })}
        </section>
      </div>
    );
}

export default App;