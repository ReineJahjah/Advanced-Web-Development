
import { CourseCard } from "./components/CourseCard";
import { Layout } from "./components/Layout";
import { CourseList } from "./components/CourseList";
import { Stats } from "./components/Stats";

import { courses } from "./data/courses";
import type { Course } from "./types";

// Empty array for testing the empty state
const courses2: Course[] = [];

export default function App() {
    return (
        <Layout title="CampusHub">

            {/* TASK 2: Static CourseCards */}
            <section>
                <h2>Task 2 - Static Course Cards</h2>

                <div className="list">
                    <CourseCard
                        code="CS301"
                        title="Advanced Web Technologies"
                        credits={5}
                        instructor="Dr. Haidar"
                        level="Advanced"
                    />

                    <CourseCard
                        code="CS205"
                        title="Databases"
                    />
                </div>
            </section>

            {/* TASK 3: Rendering using map() */}
            <section>
                <h2>Task 3 - Courses Using map()</h2>

                {courses.length === 0 ? (
                    <p className="empty">
                        No courses published yet.
                    </p>
                ) : (
                    <div className="list">
                        {courses.map(c => (
                            <CourseCard
                                key={c.code}
                                {...c}
                            />
                        ))}
                    </div>
                )}
            </section>

            {/* TASK 3: Empty state example */}
            <section>
                <h2>Task 3 - Empty State</h2>

                {courses2.length === 0 ? (
                    <p className="empty">
                        No courses published yet.
                    </p>
                ) : (
                    <div className="list">
                        {courses2.map(c => (
                            <CourseCard key={c.code} {...c} />
                        ))}
                    </div>
                )}
            </section>

            {/* TASK 4: Derived statistics */}
            <section>
                <h2>Task 4 - Statistics</h2>
                <Stats courses={courses} />
            </section>

            {/* TASK 4: Reusable CourseList */}
            <section>
                <h2>Task 4 - Reusable Course List</h2>

                <CourseList courses={courses} />
            </section>
        </Layout>
    );
}
