import React from 'react';
import ReactDOM from 'react-dom';

// Creating a dummy component
const App = () => {
  return <div>My first component</div>;
}

// Render component with ReactDOM to the index.html (in 'public' folder) in '<div id="root">'
ReactDOM.render(<App />, document.getElementById('root'));