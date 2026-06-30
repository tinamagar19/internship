import React, { useState } from 'react';

const Assignment1 = () => {
  const [button, setButton] = useState(false);

  return (
    <div className="flex justify-center items-center w-full h-screen flex-col">
      {button ? (
        <>
          <button
            className="bg-green-500 h-10 w-20 border-2 mt-4"
            onClick={() => setButton(false)}
          >
            off
          </button>
          <div className="bg-amber-600 h-300 w-200"></div>
        </>
      ) : (
        <>
         
          <button
            className="bg-green-500 h-10 w-20 border-2 mt-4"
            onClick={() => setButton(true)}
          >
            On
          </button>
          <div className="h-300 w-200"></div>
        </>
      )}
    </div>
  );
};

export default Assignment1;
