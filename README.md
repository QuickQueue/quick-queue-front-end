1# QuickQueue

### Shop Faster Shop Smarter Shop Safer

# About This Project

QuickQueue envision's a one-stop shop for all your consumer goods needs. In our current pandemic climate our goal was to build a functional, and practical store that links customers to shoppers and facilitates safe handoffs for all our vital needs. How we aimed to achieve this was simple, we wanted to build a light and snappy SPA(single-page application) that can communicate quickly and efficiently with our back-end and RDS(relational database). We want all our users (whether they're shoppers or customers) to have a refined, responsive, and snappy experience that would encourage them to return.

# How It All Works

Our application utilizes a storefront API which communicates using RESTful conventions with our backend, which is hosted on AWS's (Amazon Web Services) EC2 servers. In turn - our backend utilizes Hibernate and STS (Spring Tool Suite) to communicate with a PostgreSQL RDS we also host on AWS.

All this comes together in our frontend which is built using React. Our two distinct API's meet here and communicate through standard HTTP protocols. We encrypt all our users logins as well as ensure all endpoints are distinct and cannot be compromised.

# Technologies Used

### Back-End

QuickQueue's back-end is a Java built application also utilizing:

- Maven
- Spring Tool Suite (Spring Boot)
- Spring Data
- Hibernate and JPA (Java Persistence API)

### Front-End

On the Frontend we used React with:

- React Hooks
- Axios
- Typescript
- Material UI

### Additional Technology

In addition we made use of:

- AWS RDS and EC2 hosting
- Docker
- Git and GitHub
- Node JS and NPM (Node Package Manager)
- FakeStore API

# Usage

To utilize the application simply visit our live-hosted endpoint at: http://ec2-18-218-116-207.us-east-2.compute.amazonaws.com/login

Additionally you may clone the back-end repository. Once done, run an 'npm install' in your terminal to locally install all dependencies. Once your dependencies are installed you can execute 'npm start' to launch QuickQueue as a locally hosted React app.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# License

This project uses the following license: [GNU GENERAL PUBLIC LICENSE](https://www.gnu.org/licenses/gpl-3.0.en.html).
