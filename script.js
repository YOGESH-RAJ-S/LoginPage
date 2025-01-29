document.getElementById('container').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // You would typically handle registration logic here, for demonstration purposes, just showing success message
    document.getElementById('success-message').style.display = 'block';

    // Reset form after 2 seconds
    setTimeout(function() {
        document.getElementById('container').reset();
        document.getElementById('success-message').style.display = 'none';
    }, 2000);
});