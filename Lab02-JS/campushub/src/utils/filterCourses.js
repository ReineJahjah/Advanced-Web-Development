export function filterCourses(courses, query, level) { 
  const q = query.trim().toLowerCase(); 
  return courses.filter(course => { 
    const matchesText = 
      q === '' || 
      course.title.toLowerCase().includes(q) || 
      course.code.toLowerCase().includes(q); 
    const matchesLevel = level === 'All' || course.level === level; 
    return matchesText && matchesLevel; 
  }); 
}