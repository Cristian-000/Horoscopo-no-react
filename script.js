// script.js

async function obtenerHoroscopo(api) {
    let signo;
    let url;
    let options = {};

    if (api === 'astrologyAPI') {
        signo = document.getElementById('signoSelect1').value;
        url = `https://json.astrologyapi.com/v1/horoscope/${signo}`; // Sustituir con la URL real de la API
        options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY' // Sustituir con tu clave de API real
            }
        };
    } else if (api === 'astroAPI') {
        signo = document.getElementById('signoSelect2').value;
        url = `https://api.astroapi.com/v1/horoscope/${signo}`; // Sustituir con la URL real de la API
        options = {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer YOUR_API_KEY' // Sustituir con tu clave de API real
            }
        };
    } else if (api === 'astroSeek') {
        signo = document.getElementById('signoSelect3').value;
        url = `https://api.astroseek.com/horoscope/${signo}`; // Sustituir con la URL real de la API
    }

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        mostrarResultado(data, api);
    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarResultado(data, api) {
    const resultadoDiv = document.getElementById('resultado');
    const signo = data.sign || 'Signo desconocido';
    const horoscopo = data.horoscope || 'Horóscopo no disponible';
    const fecha = data.date || 'Fecha no disponible';

    resultadoDiv.innerHTML += `
        <div class="card result-card">
            <div class="card-body">
                <h5 class="card-title">${signo} (${api})</h5>
                <p class="card-text">${horoscopo}</p>
                <p class="card-text"><small class="text-muted">Fecha: ${fecha}</small></p>
            </div>
        </div>
    `;
}
