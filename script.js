// script.js

document.getElementById('obtenerHoroscopo').addEventListener('click', function() {
    var signo = document.getElementById('signoSelect').value;
    if(signo) {
        fetch(`https://aztro.sameerkumar.website/?sign=${signo}&day=today`, {
            method: 'POST'
        })
        .then(response => response.json())
        .then(data => {
            mostrarResultado(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    } else {
        alert('Por favor, selecciona un signo.');
    }
});

function mostrarResultado(data) {
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <div class="card signo-card">
            <div class="card-body">
                <h5 class="card-title">Horóscopo de hoy para ${data.sign}</h5>
                <p class="card-text">${data.description}</p>
                <p class="card-text"><strong>Compatibilidad:</strong> ${data.compatibility}</p>
                <p class="card-text"><strong>Número de la suerte:</strong> ${data.lucky_number}</p>
                <p class="card-text"><strong>Color de la suerte:</strong> ${data.color}</p>
                <p class="card-text"><strong>Hora de la suerte:</strong> ${data.lucky_time}</p>
            </div>
        </div>
    `;
}
