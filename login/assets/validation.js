// validate email form
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//  password strength
function isValidPassword(password) {
    return password.length >= 8;
}

//  display error messages
function displayError(container, message) {
    container.innerHTML = `<p style="color: red;">${message}</p>`;
}

// error messages
function clearError(container) {
    container.innerHTML = '';
}

// Sign Up Validation
function sing_up() {
    const form = document.getElementById('form-singup');
    const username = form.querySelector('input[name="username"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();
    const errorContainer = document.getElementById('error-singup');

    // Clear  errors li daz
    clearError(errorContainer);

    let isValid = true;

    // Validate username
    if (!username) {
        displayError(errorContainer, 'Username is required.');
        isValid = false;
    }

    // Validate email
    if (!email || !isValidEmail(email)) {
        displayError(errorContainer, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate password
    if (!password || !isValidPassword(password)) {
        displayError(errorContainer, 'Password must be at least 8 characters long.');
        isValid = false;
    }

    
    if (isValid) {
        alert('Sign Up Successful!');
        // sending it to a server
    }
}

// Sign In Validation
function sing_in() {
    const form = document.getElementById('form-singin');
    const email = form.querySelector('input[name="email"]').value.trim();
    const password = form.querySelector('input[name="password"]').value.trim();
    const errorContainer = document.getElementById('error-singin');

    // Clear previous errors
    clearError(errorContainer);

    let isValid = true;

    // Validate email
    if (!email || !isValidEmail(email)) {
        displayError(errorContainer, 'Please enter a valid email address.');
        isValid = false;
    }

    // Validate password
    if (!password || !isValidPassword(password)) {
        displayError(errorContainer, 'Password must be at least 8 characters long.');
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        alert('Sign In Successful!');
        //  credentials against stored data.
    }
}

// Sign Up and Sign In forms
document.getElementById('login').addEventListener('click', () => {
    document.getElementById('container').classList.remove('right-panel-active');
});

document.getElementById('register').addEventListener('click', () => {
    document.getElementById('container').classList.add('right-panel-active');
});
