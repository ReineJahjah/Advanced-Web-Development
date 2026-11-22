import React from 'react';

function WelcomeBanner({course, instructor, term, description}) {
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "صباح الخير";
    } else {
        return "مساء الخير";
    }
  }
  return (
    <section className="card banner">
      <h1 className="heading-large">{course}</h1>
      <p className="meta">{term} · Instructor: {instructor}</p>
      <p> {description} </p>
      <strong>{getGreeting()}</strong>
      <p>
        <strong>Welcome!</strong> In this lab you will practice JSX rendering, props, list rendering, and component composition using the
        provided template and theme.
      </p>
    </section>
  );
}

export default WelcomeBanner;

