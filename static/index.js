function sendQuestion() {
    const userInput = document.getElementById('user_input').value;
    fetch('/hello', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_input: userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response').innerHTML = `<p>${data.message}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
