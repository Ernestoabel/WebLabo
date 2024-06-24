// Data for properties
const properties = [
    {
        imgSrc: './images/anuncio1.jpg',
        title: 'Casa de Lujo en el Lago',
        description: 'Casa con lago con excelente vista, acabados de lujo a un excelente precio',
        price: 'U$S350.000',
        wc: 3,
        parking: 3,
        bedrooms: 4
    },
    {
        imgSrc: './images/anuncio2.jpg',
        title: 'Casa Terminados de Lujo',
        description: 'Casa con diseño moderno, así como tecnología inteligente y amueblada',
        price: 'U$S275.000',
        wc: 3,
        parking: 3,
        bedrooms: 4
    },
    {
        imgSrc: './images/anuncio3.jpg',
        title: 'Casa con Alberca',
        description: 'Casa con alberca y acabados de lujo en la ciudad, excelente oportunidad',
        price: 'U$S250.000',
        wc: 3,
        parking: 3,
        bedrooms: 4
    }
];

// Function to create a property card
function createPropertyCard(property) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${property.imgSrc}" class="card-img-top" alt="${property.title}">
                <div class="card-body">
                    <h5 class="card-title">${property.title}</h5>
                    <p class="card-text">${property.description}</p>
                    <p class="card-text" style="color: #2E7D32;">${property.price}</p> 
                    <div class="d-flex justify-content-around mb-3">
                        <span><img src="./images/icono_wc.svg" alt="icono_wc"> ${property.wc}</span>
                        <span><img src="./images/icono_estacionamiento.svg" alt="icono_estacionamiento"> ${property.parking}</span>
                        <span><img src="./images/icono_dormitorio.svg" alt="icono_dormitorio"> ${property.bedrooms}</span>
                    </div>
                    <button class="btn btn-primary btn-block">Ver Propiedad</button>
                </div>
            </div>
        </div>
    `;
}

// Function to render property cards
function renderPropertyCards(properties) {
    const propertyContainer = document.getElementById('property-cards');
    properties.forEach(property => {
        propertyContainer.innerHTML += createPropertyCard(property);
    });
}

// Render property cards on page load
document.addEventListener('DOMContentLoaded', () => {
    renderPropertyCards(properties);
});