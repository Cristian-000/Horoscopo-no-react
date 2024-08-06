// signo.js

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const signo = params.get('sign');
    if (signo) {
        fetch(`https://ohmanda.com/api/horoscope/${signo}`)
            .then(response => response.json())
            .then(data => {
                mostrarResultado(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
});

function mostrarResultado(data) {
    var resultadoDiv = document.getElementById('resultado');
    var signoTitulo = document.getElementById('signoTitulo');
    signoTitulo.textContent = `Horóscopo de hoy para ${data.sign}`;

    resultadoDiv.innerHTML = `
        <div class="card signo-card">
            <div class="card-body">
                <h5 class="card-title">${data.sign}</h5>
                <p class="card-text">${data.horoscope}</p>
                <p class="card-text"><small class="text-muted">Fecha: ${data.date}</small></p>
            </div>
        </div>
    `;
}
