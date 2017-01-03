const React = require('react');
const ReactDOM = require('react-dom');
const Product = require('./components/Product');

// remember to 'npm run bundle' before trying out in browser!
ReactDOM.render(
  <Product
    name="Dunder Mifflin"
    producer="PaperCo"
    color="white"
    weight={210}
  />,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
