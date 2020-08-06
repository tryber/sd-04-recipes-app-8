import React, { useState, useEffect } from 'react';


const TestCarousel = () => {

  const [counter, setCounter] = useState(1);

  return (


    <div>
      <h1>{counter}</h1>
      {counter>1 && <button onClick={() => setCounter(counter - 1)} >-</button>}
      <h4 style={{visibility: (counter === 1) ? 'visible' : 'hidden' }}> Card 01</h4>
      <h4 style={{visibility: (counter === 1 || counter === 2) ? 'visible' : 'hidden' }}> Card 02</h4>
      <h4 style={{visibility: (counter === 2 || counter === 3) ? 'visible' : 'hidden' }}> Card 03</h4>
      <h4 style={{visibility: (counter === 3 || counter === 4) ? 'visible' : 'hidden' }}> Card 04</h4>
      <h4 style={{visibility: (counter === 4 || counter === 5) ? 'visible' : 'hidden' }}> Card 05</h4>
      <h4 style={{visibility: (counter === 5) ? 'visible' : 'hidden' }}> Card 06</h4>
      {counter<5 && <button onClick={() => setCounter(counter + 1)}>+</button>}
    </div>
  );
};

export default TestCarousel;