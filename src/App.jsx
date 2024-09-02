import React, { useState } from 'react';
import './App.css';
import Qui from './component/qui'; // Import the component with correct name

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <Qui />  {/* Use the component with uppercase name */}
      </div>
    </>
  );
}

export default App;
