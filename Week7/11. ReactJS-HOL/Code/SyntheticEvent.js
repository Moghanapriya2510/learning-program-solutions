import React from 'react';

function SyntheticEvent() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("I was clicked");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me (Synthetic Event)</button>
    </div>
  );
}

export default SyntheticEvent;