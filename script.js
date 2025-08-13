
// Remove the not-loaded class to start animations
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure CSS is loaded
    setTimeout(() => {
        document.body.classList.remove('not-loaded');
    }, 100);
});

// Add click interaction to restart animation
document.addEventListener('click', function() {
    document.body.classList.add('not-loaded');
    setTimeout(() => {
        document.body.classList.remove('not-loaded');
    }, 100);
});
