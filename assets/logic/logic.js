// Wait until Dom has completed loading
$(document).ready(function() {

  //check to see if external style sheet is linked correctly
  console.log("logic.js is linked");

  // GLOBAL VARIABLES
    // Field
    const pwField = $("#passwordDisplay");
    

    
    // Buttons
    const generateBtn = $("#generate");
    const copyBtn = $("#copy");

  // PROCESSES
    // When user clicks '#generate' button...
    $(generateBtn).click(function(event) {
      event.preventDefault();
      pwField.text(generatePW);
    });
    // When user clicks '#copy' button...
    $(copyBtn).click(function(event) {
      event.preventDefault();
      const pwContent = pwField.text();
      copyPW(pwContent);
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

  // Copy generated password to clipboard 
  const copyPW = pwContent => {
    // Check if pwField is blank
    if (pwContent !== "") {
      console.log("pwcontent: ", pwContent);
      // Select contents of pwField
      $(pwContent).select();
      // // Set selection range -- for mobile devices
      // $(pwContent).setSelectionRange(0, 99999);
      // Copy selection
      document.execCommand("copy");
      // Alert user that new password has successfully been copied
      alert("New password has been copied to clipboard!")
      } else {
    alert("No password to copy! \nGenerate a password first.");
      }
  };
