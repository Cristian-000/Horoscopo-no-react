async function obtenerNoticias() {
    const url = 'https://newsapi.org/v2/top-headlines?country=us';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        mostrarNoticias(data.articles);
    } catch (error) {
        console.error('Error:', error);
    }
}

function mostrarNoticias(articles) {
    const resultadoDiv = document.getElementById('resultado');
    articles.forEach(article => {
        resultadoDiv.innerHTML += `
            <div class="card result-card">
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                    <p class="card-text"><small class="text-muted">Fuente: ${article.source.name}</small></p>
                </div>
            </div>
        `;
    });
}

obtenerNoticias();
