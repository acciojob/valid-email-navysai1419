function validEmail(str) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (str.trim() === '') {
    return false;
  }

  
  return emailRegex.test(str);
}  

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
