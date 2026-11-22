import React from 'react';
import ResourceItem from './ResourceItem.jsx';
import SectionTitle from './SectionTitle.jsx';

function ResourceList({ resources }) {
  return (
    <section className="card resources">
      <SectionTitle text="Lab Resources" />
      <ul className="resource-list">
        {resources.map((resource) => (
          <ResourceItem key={resource.id} {...resource} />
        ))}
      </ul>
    </section>
  );
}

export default ResourceList;

