document.getElementById('fetchButton').addEventListener('click', () => {
    fetch('http://localhost:3000') // Replace with your API endpoint
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultField').value = JSON.stringify(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
