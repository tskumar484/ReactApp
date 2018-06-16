# ReactApp
Creating a react app#;

A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
A bundler, such as webpack or Browserify. It lets you write modular code and bundle it together into small packages to optimize load time.
A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.


Installing React JS:
Create a new folder ex: react app and open git bash command control and follow below instructions.
// Create package.json file
1. npm init
// Installing webpack
2. npm install webpack-cli webpack-dev-server path
// Crete a webpack configuration file and update all the required fields.
// Follow link: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel#toc-setting-up-babel
3. touch webpack.config.js
// Installing webpack
4. npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --dev
// Create a new babelrc file and follow link: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel#toc-setting-up-babel
5. touch .babelrc
// Install html-webpack-plugin, read link for more information
// https://webpack.js.org/plugins/html-webpack-plugin/

6. npm install html-webpack-plugin
7. Open up your package.json and let's add a start script.
Ex:
  // add the scripts key to your package.json
  "scripts": {
    "start": "webpack-dev-server"
  }

// Writing React Component, make sure we need to install below command.
8. npm install react react-dom
