# ReactApp
Creating a react app#:

A package manager, such as Yarn or npm. It lets you take advantage of a vast ecosystem of third-party packages, and easily install or update them.
A bundler, such as webpack or Browserify. It lets you write modular code and bundle it together into small packages to optimize load time.
A compiler such as Babel. It lets you write modern JavaScript code that still works in older browsers.


Installing React JS:
Create a new folder ex: react app and open git bash command control and follow below instructions.


1.  Create package.json file
`npm init`

2. Installing webpack
`npm install webpack-cli webpack-dev-server path`
 3. Crete a webpack configuration file and update all the required fields.
`touch webpack.config.js`
 Follow link: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel#toc-setting-up-babel
https://www.valentinog.com/blog/webpack-tutorial/
4.  Installing babel
`npm install babel-loader babel-core babel-preset-es2015 babel-preset-react --dev`
Follow link: https://scotch.io/tutorials/setup-a-react-environment-using-webpack-and-babel#toc-setting-up-babel

5. Create a new babelrc file.
`touch .babelrc`
***{
    "presets":[
        "es2015", "react"
    ]
}***

6.  Install html-webpack-plugin, read link for more information.
`npm install html-webpack-plugin`
Follow link:  https://webpack.js.org/plugins/html-webpack-plugin/

7. Open up your package.json and let's add a start script.
  ***"scripts": {
    "start": "webpack-dev-server" 
  }***

8.  Writing React Component, make sure we need to install below command.
`npm install react react-dom`

9. You should install css-loader and style-loader for applying external style to the  html elements
`npm install css-loader style-loader --save`
follow this link for ways of applying css on react components
https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822
10. Reference links for developing React Projects.
https://reactjs.org/community/examples.html
https://medium.freecodecamp.org/how-to-write-your-first-react-js-component-d728d759cabc
https://codesandbox.io/s/7z8jnxvok1
