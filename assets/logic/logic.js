// Wait until Dom has completed loading
$(document).ready(function() {

  //check to see if external style sheet is linked correctly
  console.log("logic.js is linked");

  // GLOBAL VARIABLES
    // Field
    const pwField = $("#passwordDisplay");

    // Buttons
    const generateBtn = $("#generate");

  // PROCESSES
    // When user clicks '#generate' button...
    $(generateBtn).click(function(event) {
      event.preventDefault();
      pwField.text(generatePW);
    });
  // End of document.ready process
});

// FUNCTIONS
  // Generate new password
  const generatePW = () => {
    // Set generated pw length
    const pwLength = 8;
    // Set charset to be used by generated pw
    const pwCharset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    // Set empty string variable for storing generated pw
    let newPassword = ""; 
    // generate pw
    for (let i = 0, n = pwCharset.length; i < pwLength; i++) {
      newPassword += pwCharset.charAt(Math.floor(Math.random() * n));
    }
    console.log("New Password: ", newPassword);
    return newPassword;
  };
