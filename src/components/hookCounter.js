import React, { Component,useState, useEffect } from 'react';
//hook Counter useState 

function HookCounter() {

      const [count, setCount] = useState(0);
    
      // Similar to componentDidMount and componentDidUpdate:
      useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
      });
    
      return (
        <div className="form">
            <h1>Hook Counter</h1>
          <p>Counter {count} </p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
export default HookCounter