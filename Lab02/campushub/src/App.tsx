
import { Header } from "./components/Header";
import { CourseCard } from "./components/CourseCard";
import { courses } from "./data/courses";
import type { Course } from "./types";

// Empty array to test the empty-state condition
export const courses2: Course[] = [];

export default function App() {
  return (
    <>
      <Header title="CampusHub" />
      <main>
        {/* TASK 2: Manually created CourseCards */}
        <h2>Task 2 - Static Course Cards</h2>

        <CourseCard code="CS301" title="Advanced Web Technologies" credits={5} 
          instructor="Dr. Haidar" level="Advanced" />
        <CourseCard code="CS205" title="Databases"/>

        {/* TASK 3: Render courses using map() */}
        <h2>Task 3 - Course List</h2>
        {courses.length === 0 ? (<p className="empty">No courses published yet.</p>) : 
          (<div className="list">
              {courses.map(c => (<CourseCard key={c.code} {...c} />))} 
          </div> )}

        {/* TASK 3: Separate empty-state demonstration */}
        <h2>Task 3 - Empty State Example</h2>

        {courses2.length === 0 ? (<p className="empty">No courses published yet.</p>) : 
        (<div className="list">{courses2.map(c => (
          <CourseCard key={c.code} {...c} />))}
        </div>)}
      </main>
    </>
  );
}
