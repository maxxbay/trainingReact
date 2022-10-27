import React, { useState } from 'react';
import generateRandomNum from '../../utils/RandomNumber';

function SecondRandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
  const changeRandomNum = () => setRandomNum(generateRandomNum(maxNum));

  return (
    <div>
      {' '}
      <h1>{randomNum}</h1>
      <button alt="" onClick={changeRandomNum}>
        Touch me to make random number
      </button>
    </div>
  );
}

export default SecondRandomNumber;
