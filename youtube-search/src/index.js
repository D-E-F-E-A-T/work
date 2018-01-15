// Import React from the node modules (npm)
// note: we use react-dom to render component to dom!
import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This component should produce some HTML
// Creating a constant called App and assigning it a function that produces HTML
// We write in JSX when writing a component because it's clean and concise
const App = function() {
  return <div>Hi!</div>;
}

// When we make a component we want to make sure it is inserted into the DOM (page)
// USE THE REACTDOM library!
ReactDOM.render(App);
