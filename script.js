
const propiedades = [
    {
        imgSrc: './images/anuncio1.jpg',
        titulo: 'Casa de Lujo en el Lago',
        description: 'Casa con lago con excelente vista, acabados de lujo a un excelente precio',
        precio: 'U$S350.000',
        wc: 3,
        parking: 3,
        bedrooms: 4
    },
    {
        imgSrc: './images/anuncio2.jpg',
        titulo: 'Casa Terminados de Lujo',
        description: 'Casa con diseño moderno, así como tecnología inteligente y amueblada',
        precio: 'U$S275.000',
        wc: 3,
        parking: 3,
        bedrooms: 4
    },
    {
        imgSrc: './images/anuncio3.jpg',
        titulo: 'Casa con Alberca',
        description: 'Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad',
        precio: 'U$S250.000',
        wc: 3,
        parking: 3,
        bedrooms: 4
    }
];

function createPropertyCard(propiedades) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedades.imgSrc}" class="card-img-top" alt="${propiedades.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${propiedades.titulo}</h5>
                    <p class="card-text">${propiedades.description}</p>
                    <p class="card-text" style="color: #2E7D32;">${propiedades.precio}</p> 
                    <div class="d-flex justify-content-around mb-3">
                        <span><img src="./images/icono_wc.svg" alt="icono_wc"> ${propiedades.wc}</span>
                        <span><img src="./images/icono_estacionamiento.svg" alt="icono_estacionamiento"> ${propiedades.parking}</span>
                        <span><img src="./images/icono_dormitorio.svg" alt="icono_dormitorio"> ${propiedades.bedrooms}</span>
                    </div>
                    <button class="btn btn-primary btn-block">Ver Propiedad</button>
                </div>
            </div>
        </div>
    `;
}

function renderPropertyCards(propiedades) {
    const propertyContainer = document.getElementById('property-cards');
    propiedades.forEach(propiedades => {
        propertyContainer.innerHTML += createPropertyCard(propiedades);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderPropertyCards(propiedades);
});