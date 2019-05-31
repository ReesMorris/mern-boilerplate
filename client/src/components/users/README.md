# MERN Boilerplate

This boilerplate code provides everything necessary to get started with the MERN stack.

## Format

This boilerplate provides both the back and front end. Two page components (_home_ and _users_) are included, as well as a navbar component which allows you to switch between them.

The _users_ page is integrated to work with the back end and Redux by listing 10 'users' on the website (provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)). Whilst the users are loading, a message will instead be shown.

## Installation

To quickly get started, simply run the following from the root directory.
Alternatively, you can run `npm install` manually from both the root directory and the `client` directory.

```
npm run quick-install
```

This will install all dependencies and return you to the root folder.
From there, you can run any of the following commands:

- `npm run dev` will run both the back and front end (recommended)
- `npm run server` will run the back end only
- `npm run client` will run the front end only

## Dependencies

This boilerplate comes with the following dependencies:

### Front End

- [config](https://www.npmjs.com/package/axios)
- [express](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [react-scripts](https://www.npmjs.com/package/react-scripts)
- [redux](https://www.npmjs.com/package/redux)
- [redux-devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)

### Back End

- [config](https://www.npmjs.com/package/config)
- [express](https://www.npmjs.com/package/express)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [request](https://www.npmjs.com/package/request)
- [concurrently](https://www.npmjs.com/package/concurrently)\*
- [nodemon](https://www.npmjs.com/package/nodemon)\*

\*Developer dependency

## Credit

A huge thanks to Traversy Media for the majority of code used in this boilerplate.
The code used is mostly from the [MERN Stack Front To Back](https://www.udemy.com/mern-stack-front-to-back/) Udemy course.
