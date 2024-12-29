import React, { useState, useEffect } from 'react';
import '../App.css';

const TextWriter = () => {
  const [displayText, setDisplayText] = useState(''); 
  const fullText = 'Byyte School of Computing';

  useEffect(() => {
    let index = 0;

    const typeWriter = () => {
      if (index <= fullText.length) { 
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeWriter, 100); 
      }
    };

    typeWriter(); 
  }, []); 

  return (
    <div style={{ fontFamily: "Studio-Feixen-Sans, Arial", fontSize: '3em', fontWeight: 'bold', color: 'green', margin: '20px' }} >
      {displayText}
    </div>
  );
};

export default TextWriter;


// import React, { useState, useEffect } from 'react';

// const TextWriter = () => {
//   const [displayText, setDisplayText] = useState(''); // Tracks the typed text
//   const fullText = "Byte School of Computing"; // The complete text to type
//   const typingSpeed = 100; // Typing speed in milliseconds
//   const restartInterval = 120000; // Restart interval (2 minutes)

//   useEffect(() => {
//     let index = 0; // Index for tracking current character
//     let typingTimeout;

//     const typeWriter = () => {
//       if (index < fullText.length) {
//         setDisplayText((prev) => prev + fullText.charAt(index));
//         index++;
//         typingTimeout = setTimeout(typeWriter, typingSpeed); // Schedule the next character
//       }
//     };

//     const startTypingEffect = () => {
//       setDisplayText(''); // Clear the text
//       index = 0; // Reset the index
//       typeWriter(); // Start the typing animation
//     };

//     // Start the initial typing effect
//     startTypingEffect();

//     // Restart typing effect at the defined interval
//     const restartIntervalId = setInterval(() => {
//       clearTimeout(typingTimeout); // Ensure no lingering timeouts
//       startTypingEffect(); // Restart typing
//     }, restartInterval);

//     // Cleanup timeouts and intervals on component unmount
//     return () => {
//       clearTimeout(typingTimeout);
//       clearInterval(restartIntervalId);
//     };
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <div style={{ fontFamily: 'monospace', fontSize: '24px', margin: '20px' }}>
//       {displayText}
//     </div>
//   );
// };

// export default TextWriter;
