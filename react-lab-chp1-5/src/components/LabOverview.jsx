import React from 'react';
import WelcomeBanner from "./WelcomeBanner";
import CourseSummary from "./CourseSummary";
import ResourceList from "./ResourceList";
export function LabOverview({welcome, current, upcoming, resources}){
    return (
        <>
            <WelcomeBanner {...welcome} />
            <CourseSummary {...current}>
                <p className="note">{current.note}</p>
            </CourseSummary>

            <CourseSummary {...upcoming}>
                <p className="note">{upcoming.note}</p>
            </CourseSummary>
            <ResourceList resources={resources} />
        </>
    );
}