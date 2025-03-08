document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Login handling
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.querySelector('#login-form input[type="name"]').value;
            const password = document.querySelector('#login-form input[type="password"]').value;

            if (username === 'adityashah@gmail.com' && password === '1234') {
                alert('Login successful!');
                sessionStorage.setItem("isLoggedIn", "true"); // Store login state
                window.location.href = "index1.html";
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
});

//  Store booking data in session storage (Booking Form)
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('full-name')?.value.trim() || 'Not provided';
            const email = document.getElementById('email')?.value.trim() || 'Not provided';
            const phone = document.getElementById('phone')?.value.trim() || 'Not provided';
            const duration = document.getElementById('duration')?.value.trim() || '1';

            const urlParams = new URLSearchParams(window.location.search);
            const bookingDetails = {
                type: urlParams.get('type') || 'Not specified',
                name: urlParams.get('name') || 'Not specified',
                price: urlParams.get('price') || '0'
            };

            const confirmationData = { ...bookingDetails, fullName, email, phone, duration };

            console.log("Saving confirmation data:", confirmationData);

            //  Save in sessionStorage
            sessionStorage.setItem('confirmationData', JSON.stringify(confirmationData));

            // Redirect after ensuring data is stored
            setTimeout(() => {
                window.location.href = 'confirmation.html';
            }, 500);
        });
    }
});

//  Redirect functions
function redirect() {
    window.location.href = "index1.html";
}

function redirecttrue() {
    window.location.href = "payment.html";
}
