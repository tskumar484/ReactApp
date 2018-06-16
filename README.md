# ReactApp
Creating a react app#;

A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
A bundler, such as webpack or Browserify. It lets you write modular code and bundle it together into small packages to optimize load time.
A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.


Installing React JS:
Create a new folder ex: react app and open git bash command control and follow below instructions.
// Create package.json file
1. npm init <br />
// Installing webpack <br />
2. npm install webpack-cli webpack-dev-server path <br />
// Crete a webpack configuration file and update all the required fields. <br />
// Follow link: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel#toc-setting-up-babel <br />
3. touch webpack.config.js <br />
// Installing webpack <br />
4. npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --dev <br />
// Create a new babelrc file and follow link: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel#toc-setting-up-babel <br />
5. touch .babelrc <br />
// Install html-webpack-plugin, read link for more information <br />
// https://webpack.js.org/plugins/html-webpack-plugin/ <br />

6. npm install html-webpack-plugin <br />
7. Open up your package.json and let's add a start script. <br />
Ex: <br />
  // add the scripts key to your package.json <br />
  "scripts": { <br />
    "start": "webpack-dev-server" <br />
  } <br />

// Writing React Component, make sure we need to install below command. <br />
8. npm install react react-dom <br />
//you should install css-loader and style-loader for applying external style to the  html elements

9. npm install css-loader style-loader --save

// follow this link for ways of applying css on react components
https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822