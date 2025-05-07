document.getElementById('nameForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;

    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });

    const data = await response.json();
    document.getElementById('message').textContent = data.message;
    document.getElementById('nameForm').reset();
});
document.getElementById('nameForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const name = document.getElementById('nameInput').value;

    const response = await fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
    });

    const data = await response.json();
    document.getElementById('message').textContent = data.message;
    document.getElementById('nameForm').reset();
});
