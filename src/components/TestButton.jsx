import * as React from "react";

const TestButton = (props) => { 
  const [count, increment] = React.useState(0);
  
  return (
    <>
      <button onClick={() => increment((prevCount) => prevCount + 1)}>
        インクリメントする
      </button>
      <p>{count}</p>
    </>
  );
};

export default TestButton;
