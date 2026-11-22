import React from 'react';
import SectionTitle from './SectionTitle.jsx';

function CourseSummary({title, topics, duration, deliveryMode, children }) {
  return (
    <section className="card summary">
      <SectionTitle text={title} />
      <dl className="summary-list">
        <div>
          <dt>Topics</dt>
          <dd>{Array.isArray(topics)? topics.join(", ") : topics}</dd>
        </div>
        <div>
          <dt>Duration</dt>
          <dd>{duration}</dd>
        </div>
        <div>
          <dt>Delivery</dt>
          <dd>{deliveryMode}</dd>
        </div>
      </dl>
      {children && <footer className="summary-footer">{children}</footer>}
    </section>
  );
}

export default CourseSummary;

