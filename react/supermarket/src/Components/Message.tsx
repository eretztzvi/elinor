import { useState, useEffect, useRef } from "react";

const Message: React.FC<{ text: string }> = ({ text }) => {
  const [status, setStatus] = useState<boolean>(false);
  const [currentNumber, setCurrentNumber] = useState<boolean>(false);

  const textRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleStatus = () => {
    setStatus(!status);
  };
  const handleCurrentNumber = () => {
    setCurrentNumber(!currentNumber);
  };

  useEffect(() => {
    
    textRef.current.innerHTML = `Hello ${status ? "Elinor" : "Amir"}`;

    return () => {
      console.log("i am dead");
    };
  }, [status]);

  return (
    <>
      <p ref={textRef}>{text}</p>

      <button onClick={handleStatus}>Change status</button>
      {status && <p>My status is true</p>}
      {!status && <p>My status is false</p>}

      <button onClick={handleCurrentNumber}>Change number</button>
      {currentNumber && <p>My currentNumber is true</p>}
      {!currentNumber && <p>My currentNumber is false</p>}
    </>
  );
};

export default Message;
