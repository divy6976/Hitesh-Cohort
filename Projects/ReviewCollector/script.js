// DOM Elements
const reviewForm = document.getElementById('reviewForm');
const nameInput = document.getElementById('name');
const ratingInput = document.getElementById('rating');
const commentInput = document.getElementById('comment');
const reviewsList = document.getElementById('reviewsList');
const stars = document.querySelectorAll('.star');

// Store reviews in localStorage
let reviews = JSON.parse(localStorage.getItem('reviews')) || [];

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    displayReviews();
    setupStarRating();
});

// Star Rating Functionality
function setupStarRating() {
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = parseInt(star.dataset.rating);
            setRating(rating);
        });
        
        star.addEventListener('mouseenter', () => {
            const rating = parseInt(star.dataset.rating);
            highlightStars(rating);
        });
    });
    
    // Reset stars when mouse leaves the rating container
    document.querySelector('.rating-stars').addEventListener('mouseleave', () => {
        const currentRating = parseInt(ratingInput.value);
        highlightStars(currentRating);
    });
}

function setRating(rating) {
    ratingInput.value = rating;
    highlightStars(rating);
}

function highlightStars(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Form Submission
reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = nameInput.value.trim();
    const rating = parseInt(ratingInput.value);
    const comment = commentInput.value.trim();
    
    // Validation
    if (!name || !comment) {
        alert('Please fill in all fields');
        return;
    }
    
    if (rating === 0) {
        alert('Please select a rating');
        return;
    }
    
    // Create new review
    const newReview = {
        id: Date.now(),
        name: name,
        rating: rating,
        comment: comment,
        date: new Date().toLocaleDateString()
    };
    
    // Add to reviews array
    reviews.unshift(newReview);
    
    // Save to localStorage
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    // Update display
    displayReviews();
    
    // Reset form
    resetForm();
});

function resetForm() {
    reviewForm.reset();
    ratingInput.value = 0;
    highlightStars(0);
}

function displayReviews() {
    if (reviews.length === 0) {
        reviewsList.innerHTML = '<div class="empty-state">No reviews yet. Be the first to add one!</div>';
        return;
    }
    
    reviewsList.innerHTML = reviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <div class="review-name">${escapeHtml(review.name)}</div>
                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
            </div>
            <div class="review-comment">${escapeHtml(review.comment)}</div>
            <div class="review-date">${review.date}</div>
        </div>
    `).join('');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Clear all reviews (optional feature)
function clearAllReviews() {
    if (confirm('Are you sure you want to delete all reviews?')) {
        reviews = [];
        localStorage.removeItem('reviews');
        displayReviews();
    }
}

// Add a clear button to the UI (optional)
function addClearButton() {
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Clear All Reviews';
    clearBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 8px 16px;
        background: #ff6b6b;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 0.9rem;
    `;
    clearBtn.addEventListener('click', clearAllReviews);
    document.body.appendChild(clearBtn);
}

// Uncomment the line below if you want a clear all button
// addClearButton(); 