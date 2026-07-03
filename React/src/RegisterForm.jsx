import React, { useState } from 'react';

const RegisterForm = () => {
  const [text, setText] = useState("Register");
  const [showPopup, setShowPopup] = useState(false);

  const handleToggle = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
   
    setText(text === "Register" ? "Login" : "Register");
  };

  return (
    <div className="grid place-items-center min-h-screen bg-[#fbc4ca] p-4 relative">
      
      <form className="w-96 bg-[#a6eec1] border-2 border-[#b04593] p-6 flex flex-col gap-4 relative">
        
        <h1 className="text-xl font-bold text-[#b04593]">
          {text === "Register" ? "{Form}" : "Login"}
        </h1>

        {text === "Register" && (
          <>
            <input type="text" placeholder="User Name" className="p-1 border-2 border-[#b04593] bg-[#fef5a1]" />
            <input type="text" placeholder="Address" className="p-1 border-2 border-[#b04593] bg-[#fef5a1]" />
            <input type="number" placeholder="phone" className="p-1 border-2 border-[#b04593] bg-[#fef5a1]" />
            <input type="text" placeholder="country" className="p-1 border-2 border-[#b04593] bg-[#fef5a1]" />
          </>
        )}

        <input type="email" placeholder="Email" className="p-1 border-2 border-[#b04593] bg-[#fef5a1]" />
        <input type="password" placeholder="Password" className="p-1 border-2 border-[#b04593] bg-[#fef5a1]" />

        <button 
          type="button" 
          onClick={handleToggle}
          className="bg-[#fef5a1] border-2 border-[#b04593] px-3 py-1 self-end cursor-pointer font-medium"
        >
          {text === "Register" ? "Login/register" : "Login"}
        </button>
      </form>

      {showPopup && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center z-50">
          <div className="bg-[#fef5a1] border-4 border-[#b04593] p-6 rounded-none shadow-2xl w-80 text-center relative">
            
           
            <button 
              onClick={closePopup}
              className="absolute top-1 right-2 text-xl font-bold text-[#b04593] cursor-pointer"
            >
              ✕
            </button>

           
            <p className="text-md font-bold text-black mt-2">
              Form State: "{text}" Selected.
            </p>

           
            <div className="text-4xl mt-4 text-[#b04593] font-bold">
              ✓
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default RegisterForm;