import type { Course } from "../types";

type CourseCardProps =
    Pick<Course, "code" | "title"> & Partial<Course>;

export function CourseCard({
    code,
    title,
    credits = 3,
    instructor = "TBA",
    level = "Beginner"
}: CourseCardProps) {
    return (
        <article className="card">
            <p className="meta">{code}</p>
            <h3>{title}</h3>
            <p className="meta">{credits} credits · {instructor} · {level}</p>
        </article>
    );
}