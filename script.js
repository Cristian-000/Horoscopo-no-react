// script.js

document.getElementById('obtenerHoroscopo').addEventListener('click', function() {
    var signo = document.getElementById('signoSelect').value;
    if (signo) {
        fetch(`https://ohmanda.com/api/horoscope/${signo}`)
            .then(response => response.json())
            .then(data => {
                mostrarResultado(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        alert('Por favor, selecciona un signo del zodiaco.');
    }
});

function mostrarResultado(data) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="card signo-card">
            <div class="card-body">
                <h5 class="card-title">${data.sign}</h5>
                <p class="card-text">${data.horoscope}</p>
            </div>
        </div>
    `;
}
