document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const loginToggle = document.getElementById('login-toggle');
    const signupToggle = document.getElementById('signup-toggle');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginToggle && signupToggle) {
        [loginToggle, signupToggle].forEach(btn => {
            btn.addEventListener('click', () => {
                loginForm.classList.toggle('active');
                signupForm.classList.toggle('active');
                loginToggle.classList.toggle('active');
                signupToggle.classList.toggle('active');
            });
        });
    }

    const restrictedLinks = ['flights-link', 'cars-link', 'hotels-link', 'about-link'];
    const modal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');

    if (modal && closeModal) {
        restrictedLinks.forEach(id => {
            const link = document.getElementById(id);
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    modal.style.display = 'flex';
                });
            }
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.querySelector('#login-form input[type="name"]').value;
            const password = document.querySelector('#login-form input[type="password"]').value;

            if (username === 'adityashah' && password === '1234') {
                alert('Login successfull!');
                window.location.href = "index1.html";
            } else {
                alert('Invalid credentials. Please try again.');
            }
        });
    }
});
function redirectToBooking() {
    window.location.href = "bookings.html";
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const userDetails = {
                fullName: document.getElementById('full-name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                duration: document.getElementById('duration') ? document.getElementById('duration').value : '1'
            };

            const urlParams = new URLSearchParams(window.location.search);
            const bookingDetails = {
                type: urlParams.get('type') || 'Not specified',
                name: urlParams.get('name') || 'Not specified',
                price: urlParams.get('price') || '0'
            };

            const confirmationData = { ...bookingDetails, ...userDetails };

            sessionStorage.setItem('confirmationData', JSON.stringify(confirmationData));

            window.location.href = 'confirmation.html';
        });
    }

    if (document.getElementById('confirmation-details')) {
        const confirmationData = JSON.parse(sessionStorage.getItem('confirmationData'));

        if (confirmationData) {
            document.getElementById('booking-type').textContent = `Type: ${confirmationData.type}`;
            document.getElementById('booking-name').textContent = `Item: ${confirmationData.name}`;
            document.getElementById('booking-price').textContent = `Price: ₹${confirmationData.price}`;
            document.getElementById('booking-duration').textContent = `Duration: ${confirmationData.duration} days`;
            document.getElementById('user-name').textContent = `Booked by: ${confirmationData.fullName}`;
            document.getElementById('user-email').textContent = `Email: ${confirmationData.email}`;
            document.getElementById('user-phone').textContent = `Phone: ${confirmationData.phone}`;
        } else {
            document.getElementById('confirmation-details').innerHTML = "<p>No booking data found.</p>";
        }
    }
});

function redirect() {
    window.location.href = "index1.html";
}

function redirecttrue() {
    window.location.href = "payment.html";
}

document.addEventListener('DOMContentLoaded', () => {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
});
