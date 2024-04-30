document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var username = document.getElementById('username').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var usernameError = document.getElementById('usernameError');
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
  

    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
  
    if (username.length < 6) {
      usernameError.textContent = 'Username must be at least 6 characters long.';
    }
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Invalid email format.';
    }
  
  
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      passwordError.textContent = 'Password must be at least 8 characters long and contain at least one capital letter and one number.';
    }
  
    if (!usernameError.textContent && !emailError.textContent && !passwordError.textContent) {
      alert('Registration successful!');
    }
  });
  