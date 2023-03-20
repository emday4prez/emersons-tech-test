# Emerson's Technical Test

Welcome to your technical test. You will be able to see a few files already setup for you on this project.
This test comes with a button component + a fully functional test for that component using jest & react testing library.

## Rules
- You may use any css framework: css, scss, tailwindcss, JSS etc 
- You may use any state management system: Redux, context etc 
- You may add typescript or convert the project to NextJS (or both).
- You can **NOT** use `someComp.jsx` naming conventions for components (look @ the existing code layout).
- Every page **MUST** have responsive design.

## Time
You may have as much time as you wish to complete the following task. Take your time and make sure to do everything right. 

## Brief
You are hired to create a `Login`, `Registration` and `dashboard` page by a company.
Your application needs to be able to register new users, log in existing users and display them with a dashboard analytics page: https://dribbble.com/shots/20780228-LOOP-Sales-Dashboard-Animation
It doesn't need to be an exact replica of the above design but it needs the following stats:
- Total revenue $
- Total sales $
- Total new customers
- Total growth %
- Revenue graph
- Top Selling products
and anything else you can think of adding this page.

You will also need to fill in the dashboard's dummy navigation bar, complete with a notifications modal.
When a customer registers you are required to have their information stored in state and redirected to the dashboard.
You will be required to have 1 hardcoded login email & password.
You will be required to have a log-out button which clears state and redirects you to the login page. 

# Checklist
Required:
- [ ] Create a Login page
- [ ] Create a Registration page
- [ ] Create a Dashboard page
- [ ] Create tests for each page
- [ ] Create tests for each component created
- [ ] Each page has responsive design and looks good on mobile, tablet and desktop devices
- [ ] The application has state management and the logic is fully implemented

Optional:
- [ ] Write documentation for all your hard to understand code
- [ ] Add eslint & typescript to the project, functions, components & pages.
- [ ] Add docker this application
- [ ] Add cypress e2e tests to this application
- [ ] Deploy your application to a service: netlify, heroku, etc
