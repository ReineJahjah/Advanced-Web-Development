export function CourseCard({code, title, instructor, credits, level, enrolled, onToggle}){
    return(
        <article className={enrolled ? 'card card--enrolled' : 'card'}> 
            <div className="card__top"> 
                <span className="card__code">{code}</span> 
                <span className={`badge badge--${level.toLowerCase()}`}>{level}</span> 
            </div> 
            <h2 className="card__title">{title}</h2> 
            <p className="card__meta">{instructor} · {credits} credits</p> 
            <button className="btn" onClick={onToggle}> 
                {enrolled ? 'Enrolled ✓' : 'Enrol'} 
            </button>
        </article> 
    );
}