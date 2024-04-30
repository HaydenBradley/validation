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
  
    console.log('Starting validation checks...');
  
  
    console.log('Username:', username);
    if (username.length < 6) {
      console.log('Username validation failed');
      usernameError.textContent = 'Username must be at least 6 characters long.';
    }
  
    console.log('Email:', email);
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      console.log('Email validation failed');
      emailError.textContent = 'Invalid email format.';
    }
  
    console.log('Password:', password);
    var passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
      console.log('Password validation failed');
      passwordError.textContent = 'Password must be at least 8 characters long and contain at least one capital letter and one number.';
    }
  
    if (!usernameError.textContent && !emailError.textContent && !passwordError.textContent) {
      console.log('Validation successful. Submitting form...');
      alert('Registration successful!');
    } else {
      console.log('Validation failed. Please correct errors.');
    }
  });
  
  