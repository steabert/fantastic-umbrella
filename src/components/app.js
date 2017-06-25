import React from 'react';
import Temperature from './temperature';

const App = (props) => {
  return (
    <div>
      <header>
        <h1>Hello {props.name}!</h1>
      </header>
      <Temperature />
    </div>
  );
};

export default App;
