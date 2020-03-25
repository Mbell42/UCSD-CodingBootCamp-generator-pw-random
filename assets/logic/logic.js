//check to see if external style sheet is linked correctly
    console.log("logic.js is linked");

// PROCESSES

// When user clicks '#generate' button...


// When user clicks '#copy' button...


// FUNCTIONS
function generatePW () {
  // Set generated pw length
  const pwLength = 8;
  // Set charset to be used by generated pw
  const pwCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  // Set empty string variable for storing generated pw
  let newPassword = ""; 
  // generate pw
  for (const i = 0, n = pwCharset.length; i < pwLength; i++) {
    newPassword += pwCharset.charAt(Math.floor(Math.random() * n));
  }
  return newPassword;
};

function copyPW () {
  
};