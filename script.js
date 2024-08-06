async function obtenerHoroscopo(api) {
    let signo;
    let url;
    let options = {};

    if (api === 'aztro') {
        signo = document.getElementById('signoSelect1').value;
        url = `https://aztro.sameerkumar.website/?sign=${signo}&day=today`; // API gratuita
        options = {
            method: 'POST', // La API requiere POST
        };
    } else if (api === 'horoscopeAPI') {
        signo = document.getElementById('signoSelect2').value;
        url = `https://horoscope-api.herokuapp.com/horoscope/today/${signo}`; // API gratuita
    } else if (api === 'openAstrology') {
        signo = document.getElementById('signoSelect3').value;
        url = `https://www.tarot.api/astrology/${signo}/daily`; // API gratuita
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
    const horoscopo = data.description || data.horoscope || 'Horóscopo no disponible'; // Ajusta según la API
    const fecha = data.current_date || data.date || 'Fecha no disponible'; // Ajusta según la API

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
