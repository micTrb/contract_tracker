
## MERN Contract tracker

A simple MERN (MongoDB, Express.js, React.js and Node.js) application to ingest track data based on music 
contracts.<br/>
The frontend is based on [Create React App](https://facebook.github.io/create-react-app)

**Notice**: I provided a cluster that relies on my MongoDB account

### Getting started

**First of all, install root dependecies:**

from ``` root ``` launch

###### `npm install`

this command will install all the dependencies needed (including Mocha for testing and Babel).

Then, install backend dependecies: 

from ``` root/backend ``` launch

###### `npm install`

this command will install all the dependencies needed (including Mocha for testing and Babel).

<br />


**Launch the project from root directory:**
```
npm run start
```
It will run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### Main features
The application is a database manager that enables the creation of contracts for musical tracks and tracks based on created contracts.
It allows you to create a contract and create tracks based on that contract. 
Additionally, you can edit or delete a track from the provided list.

All the data are collections stored in a MongoDB cluster.

### Test

from ``` root/backend ``` launch

###### `npm test`

You should have installed all the devDependencies in order to use Mocha/Chai libraries
The test will consider models validations and http requests.







### Other Available Scripts

In the project directory, you can run:

###### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
