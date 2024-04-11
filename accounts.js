const accountUser = {
    user1: {
        username: 'user1',
        password: '1111',
        redirectUrl:'./acc1/acc1.html',
    },
    user2: {
        username: 'user2',
        password: '2222',
        redirectUrl: './acc2.html',
    }
};

// Get form input values
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

// Add submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form input values
    const username = usernameInput.value;
    const password = passwordInput.value;
    
    // Check if the credentials are valid for any user
    let validUser = null;
    for (let user in accountUser) {
        if (username === accountUser[user].username && password === accountUser[user].password) {
            validUser = accountUser[user];
            break;
        }
    }

    // Redirect to appropriate page
    if (validUser) {
        window.location.href = validUser.redirectUrl;
    } else {
        console.log('Invalid credentials');
    }
});
