import type { Course } from "../types";
import { CourseCard } from "./CourseCard";

interface CourseListProps {
    courses: Course[];
    emptyMessage?: string;
}

export function CourseList({courses, emptyMessage="No courses found"}:CourseListProps){
    if(courses.length===0){
        return (
            <p className="empty">{emptyMessage}</p>
        );
    }
    return(
        <div className="list">
            {courses.map(course =>(
                <CourseCard key={course.code} code={course.code} title={course.title} credits={course.credits} instructor={course.instructor} level={course.level} />
            ))}
        </div>
    );
}