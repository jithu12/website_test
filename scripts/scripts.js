const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // You can add more complex validation here, e.g., email format check

  // Submit the form or perform other actions
  console.log('Form submitted:', name, email, message);
});