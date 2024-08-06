async function obtenerHoroscopo(api) {
    let signo;
    let url;
    let options = {};

    if (api === 'astrologyAPI') {
        signo = document.getElementById('signoSelect1').value;
        url = `https://aztro.sameerkumar.website/?sign=${signo}&day=today`; // API gratuita
        options = {
            method: 'POST', // La API requiere POST
        };
    } else if (api === 'astroAPI') {
        signo = document.getElementById('signoSelect2').value;
        url = `https://horoscope-api.herokuapp.com/horoscope/today/${signo}`; // API gratuita
        options = {
            method: 'GET', // La API requiere GET
        };
    } else if (api === 'astroSeek') {
        signo = document.getElementById('signoSelect3').value;
        url = `https://www.tarot.api/astrology/${signo}/daily`; // API gratuita
        options = {
            method: 'GET', // La API requiere GET
        };
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        mostrarResultado(data, api);
    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarResultado(data, api) {
    const resultadoDiv = document.getElementById('resultado');
    let signo = data.sign || 'Signo desconocido';
    let horoscopo;
    let fecha;

    // Ajustar según la estructura de respuesta de cada API
    if (api === 'astrologyAPI') {
        horoscopo = data.description || 'Horóscopo no disponible';
        fecha = data.current_date || 'Fecha no disponible';
    } else if (api === 'astroAPI') {
        horoscopo = data.horoscope || 'Horóscopo no disponible';
        fecha = data.date || 'Fecha no disponible';
    } else if (api === 'astroSeek') {
        horoscopo = data.description || 'Horóscopo no disponible';
        fecha = data.current_date || 'Fecha no disponible';
    }

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
