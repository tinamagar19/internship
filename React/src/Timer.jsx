import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

 
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (totalSeconds % 60).toString().padStart(2, '0');
    return `${hrs} : ${mins} : ${secs}`;
  };

  return (
  
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-100">
      
      <div className="bg-yellow-200 border-4 border-black w-200 h-80 flex flex-col justify-center items-center rounded-sm ">
        
        <div className="text-5xl text-black mb-8 ">
          {formatTime(seconds)}
        </div>

        <div className="flex gap-5">
          <button 
            onClick={() => setIsActive(true)}
            className="bg-white text-black border-2 border-black px-6 py-2"
          >
            start
          </button>
          
          <button 
            onClick={() => setIsActive(false)}
            className="bg-white text-black border-2 border-black px-6 py-2"
          >
            pause
          </button>
          
          <button 
            onClick={() => { setIsActive(false); setSeconds(0); }}
            className="bg-white text-black border-2 border-black px-6 py-2"
          >
            reset
          </button>
        </div>

      </div>

    </div>
  );
};

export default Timer;