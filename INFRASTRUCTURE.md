## Project Infrastructure Guide

> Version 1.0

This style guide covers the best practices and conventions for developing on our NextJS/React application.

> This is a template document for you and your team to review. You don't need to answer all the questions. They are meant to spark discussion and help you document your team's best practices. Feel free to add, remove, or modify the questions to better fit your team's needs. Then remove the questions (and this paragraph) and replace it with your team's answers. <br/><br/> Some questions can be answered early on in the project, while others may require more time to implement. We recommend revisiting this document regularly to ensure it stays up to date.

## Developer Setup

- Starting from a stock consumer laptop, what are the steps to get the project running locally?
  - Is Docker required? Or nix-shell? What images or containers are required?
  - How do they set up their enviroment variables?
  - How do they get the code?
  - How do they install the dependencies?
  - How do you start the application?

## Project Structure

- Describe the folder structure at the high level.
  - If a mono-repo, how are the applications and libraries organized?
  - If not a mono-repo what are related projects that should be cloned locally for development and how are those managed?

## Code Quality Standards

In this section we discuss code quality standards from linting and formatting to testing and documentation.

### Linting and Prettier

> We strongly recommend using eslint with the Next extensions. This builds on top of React linting and adds NextJS specific rules. We also also strongly recommend using Prettier to format the code. And that both are run as part of a pre-commit hook.

- At a high level, what linting standards are applied?
- If specific rules are overridden, what are they and why?
- How are Prettier settings configured?
- How are these tools integrated into the development workflow and the most commonly used editor or IDE?

> Relevant technologies: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

### Design System and CSS

> The approach to styling and CSS is something you are going to want to figure out early on in your application. We recommend creating a set of proof of concepts to test out different approaches to see what matches your requirements and has the developer experience that your team likes, and that works with other stakeholders like the design team. The important thing is to document the approach and make sure it is consistent across the application.

- Is there a design system in use? Which is it? If it's custom, where is it located and documented? How is it maintained?
- How are styles organized and applied to components?
  - Is the CSS in JS, SCSS, or something else? Is Tailwind used?
  - Is a component library used? If so, which one?
- How are global styles applied?
- Is there a company standard style guide that should be followed?
  - If so, where is it located and how is it maintained?
- If there is a design tool, how are designs shared with developers?

> Relevant technologies: [Tailwind CSS](https://tailwindcss.com/),[StyleX](https://stylex-docusaurus.vercel.app/)

### Storybook

- Is Storybook used? If so, how is it integrated into the development workflow?
- How are stories organized?
- How are shared components documented?

> Relevant technologies: [Storybook](https://storybook.js.org/)

## Application Architecture

In this section we discuss the architecture of the application, including component structure, state management, and API usage.

### Component Location, Naming and Structure

> Where components are located and how they are named is a key part of the developer experience. It's important to have a clear and consistent structure for organizing components. This makes it easier for developers to find and understand the codebase. And it makes it easier to reuse components across the application.<br/><br/>You should expect this to evolve over time as you learn more about the application and how it is used. It's important to keep this document up to date as you make changes.

- What are the naming conventions for components?
- If a React Server Component and a client component are coupled, how are they named and organized?
- Where are route-specific components located?
- Where are shared components located?

### Component Reuse

- What qualifies a component for reuse?
- How are shared components organized, documented, and tested?
- How are shared components versioned and published?

### Form Handling

- What library is used for form handling?
- How are forms validated?
- How are forms submitted? Server action or API route?
- How are form errors handled?
- How are file uploads handled?

> Relavant technologies: [React Hook Form](https://react-hook-form.com/)

### Custom Hooks and Context

- How are custom hooks organized and named?
- What criteria is used to determine if a custom hook should be created?
- What is stored in context?
  - How are context providers organized and named?
- How do the custom hooks relate to the state manager if one is used?

### State Management

> State management is a key part of any React application, however it's not always required in NextJS applications because of the implicit state in the URL, the management of forms and server actions, and the ability to fetch data on the server side. It's important to be thoughtful in your approach to external state management as it will add complexity to your application in the context of state on the server versus state on the client. We recommend doing proof of concepts to check see if state management is required and how it will be implemented.

- What state management library are used?
- What data is stored in the state?
- What data is avaialble on the server and client?

> Relevant technologies: [Redux](https://redux.js.org/), [Zustand](https://zustand.surge.sh/)

### Authentication and Authorization, Roles and Permissions

- How are sessions managed?
- How are users authenticated?
- How are roles and permissions managed?
- How are roles and permissions enforced?
- What test accounts are available, and how are they managed?

### Static Assets

- How are static assets managed?
- Where are static assets deployed?
- What checks are run against the static assets before deployment (e.g. image optimization)?

### Static Content

- Does the site utilize static generation of pages?
- When are static pages generated?
- Is partial pre-rendering used?

### APIs And Server Actions

- How are APIs and server actions organized?
- Are there backend APIs?
  - Where are they documented?
  - How are they accessed from the back and front end?
- Is the NextJS server acting as a backend for frontend?
- Which API standards are being utilitized?
- How are server actions utilized?
- Are we using a request library on the frontend?
- What is the caching policy for APIs?

> Relevant technologies: [React Query](https://react-query.tanstack.com/)

### Long Running Tasks or Batch Jobs

- Are there certain functions of the system that take a long time to run, or are run in an offline batch job?
- How are long running tasks or batch jobs handled?

> Relevant technologies: [Inngest](https://launchdarkly.com/)

### Feature Flagging

- Are feature flags used?
- Is there a dark deploy feature?

> Relevant technologies: [LaunchDarkly](https://www.inngest.com/)

### Accessibility

- Are there any tools used to check for accessibility issues?
- How is accessibility enforced?

### Internationalization

- Is the application internationalized?
- How are translations managed?
- How are translations stored and accessed?

### Logging, Error Handling

> At the very least we recommend that any system in production capture server logs and have client side error capture. This will help you understand what is happening in your application and help you debug issues. We also recommend that you have a monitoring system in place to alert you to issues in production.

- How are logs captured?
- How are client errors captured?
- How do we view logs and errors?

> Relevant technologies: [DataDog](https://www.datadoghq.com/), [New Relic](https://newrelic.com/)

### Perforance Monitoring

> We recommend that you have some performance checks that are run in your CI/CD pipeline. This will help you catch performance issues before they get to production. This can start as simply as checks on the size of the client bundles and assets. And then move to more complex checks like Lighthouse runs.

- How is performance monitored?

### Analytics

- What analytics tools are used?
- How are analytics events tracked and what team manages those events?
- How are analytics events triggered?
- What is the process for adding analytics events to new features?

> Relevant technologies: [Segment](https://segment.com/), [Google Analytics](https://analytics.google.com/)

### Testing

- What is the overall testing strategy?
  - What is important to test?
  - What is left untested?

#### Unit Testing

> Our recommendation is to start with unit tests and then move to integration and end-to-end tests. Unit tests are the fastest to write and run, and they provide the most value when they are run frequently. They are also the easiest to maintain and refactor. <br/><br/> Unit testing is a return on investment balancing act. Test too little and you won't have confidence in your application. Too much and you'll spend all your time writing tests and your application code will feel inflexible. The key is to find the right balance for your team and your application.

- How does unit testing fit into the overall testing strategy?
- How are unit tests applied? What is unit tested and what is not unit tested?
  - To component?
  - To hooks?
  - To state management?
  - To APIs?
- What is the unit testing framework?
- Where are unit tests located?
- What is the mocking strategy?
- What is the coverage threshold?

> Relevant technologies: [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [Vitest](https://vitest.dev/)

#### Integration Testing

- How does integration testing fit into the overall testing strategy?
- What is integration tested and what is not integration tested?

#### End-to-End Testing

> It is recommended that you have at least some E2E "smoke tests" for your application that should run quickly and against every pull request. These smoke tests should check for the basic functionality of the application. They are not meant to be exhaustive, but to give you confidence that the "happy paths" of the application are working as expected.

- How does end-to-end testing fit into the overall testing strategy?
- Are end-to-end tests smoke tests or full regression tests?
- What coding standards are required to write end-to-end tests?
- Who writes end-to-end tests?
- When are end-to-end tests run?

> Relevant technologies: [Cypress](https://www.cypress.io/), [Playwright](https://playwright.dev/)

### Documentation

- What are the documentation standards for this project?
- If libraries are included, how are they documented?
  - Do you use Docusaurus or some other tool for documentation?
- Do you use JSDoc?

> Relevant technologies: [Docusaurus](https://docusaurus.io/), [JSDoc](https://jsdoc.app/)

### Pull Requests Submission and Review

- How are Pull Requests written?
- What automated checks are run pre-commit (e.g. Husky is used to run linting and unit tests)?

## Environments and Deployment

- What are the different environemts (e.g. dev, staging, production)?
- How are environment variables managed?
- How is the application deployed to each environment?
- Are different artifacts deployed to different environments?
- How are secrets managed?
- How are secrets shared with developers?
- How are services and databases managed in each environment?
