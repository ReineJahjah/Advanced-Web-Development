# React Lab 01 – IN432

## Project Description

A React application that presents a lab overview using JSX, props, reusable components, list rendering and component composition.

## Setup Instructions

1. Duplicate the provided lab-template folder.
2. Rename the project folder according to the required naming convention.
3. Open the project in Visual Studio Code.
4. Run `npm install` to install dependencies.
5. Run `npm run dev` to start the development server.
6. Open the displayed localhost URL in the browser.

## Components

- **WelcomeBanner:** Displays course information, a welcome message and an Arabic greeting.
- **CourseSummary:** Displays lab information and accepts additional notes through children.
- **ResourceItem:** Displays an individual resource with an optional badge.
- **ResourceList:** Renders a list of resources using map() and unique keys.
- **LabOverview:** Combines the components into a complete lab overview page.
- **SectionTitle:** Provides reusable headings with a configurable heading level.

## Completed Stretch Exercises

- Part 1: Arabic greeting based on the current hour.
- Part 2: Displaying an array of topics separated by commas.
- Part 3: Conditional resource badges using a ternary operator.
- Part 4: Reusable SectionTitle component.

## Styling

The provided lab-theme.css stylesheet is preserved without modifications.

## Technologies

React, JavaScript, JSX, CSS and Vite.