// ==========================================
// Santa Cruz Pet Watch
// JavaScript
// ==========================================


// Client-provided pet dataset
const pets = [
    {
        "id": "lf001",
        "status": "Lost",
        "name": "Rumba",
        "species": "Dog",
        "breed": "Dachshund",
        "area": "Urubo",
        "date": "2026-08-08",
        "image": "https://placedog.net/500/500?id=12",
        "contact": "777-12345",
        "description": "Female dachshund, very friendly but might be scared. Wearing a red collar."
    },

    {
        "id": "lf002",
        "status": "Found",
        "name": "Unknown",
        "species": "Cat",
        "breed": "Domestic Shorthair",
        "area": "Equipetrol",
        "date": "2026-08-09",
        "image": "https://placekitten.com/500/500",
        "contact": "777-98765",
        "description": "Found hiding under a car near the Ventura Mall. Very vocal, no collar."
    },

    {
        "id": "lf003",
        "status": "Lost",
        "name": "Max",
        "species": "Dog",
        "breed": "Golden Retriever",
        "area": "Sirari",
        "date": "2026-08-05",
        "image": "https://placedog.net/500/500?id=43",
        "contact": "777-55555",
        "description": "Large male Golden, microchipped. Wandered off during the storm."
    }
];


// Find the area where the pet cards will appear
const petGrid = document.getElementById("pet-grid");


// Display all pets when the page loads
displayPets(pets);


// ==========================================
// Function to Display Pet Cards
// ==========================================

function displayPets(petList) {

    // Clear the existing cards
    petGrid.innerHTML = "";

    // Create a card for every pet
    petList.forEach(function(pet) {

        // Create the card
        const card = document.createElement("article");

        card.classList.add("pet-card");

        // Choose the correct status class
        const statusClass =
            pet.status === "Lost"
                ? "status-lost"
                : "status-found";

        // Add the card's HTML
        card.innerHTML = `
            <img
                src="${pet.image}"
                alt="${pet.species} named ${pet.name}"
            >

            <div class="pet-card-content">

                <span class="status ${statusClass}">
                    ${pet.status}
                </span>

                <h3>${pet.name}</h3>

                <p>
                    <strong>Species:</strong>
                    ${pet.species}
                </p>

                <p>
                    <strong>Breed:</strong>
                    ${pet.breed}
                </p>

                <p>
                    <strong>Area:</strong>
                    ${pet.area}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${pet.date}
                </p>

                <p class="description">
                    ${pet.description}
                </p>

                <p>
                    <strong>Contact:</strong>
                    ${pet.contact}
                </p>

            </div>
        `;

        // Add the card to the page
        petGrid.appendChild(card);
    });
}


// ==========================================
// Filtering
// ==========================================

// Get the filter elements
const statusFilter = document.getElementById("status-filter");
const areaFilter = document.getElementById("area-filter");


// Run the filtering function whenever a filter changes
statusFilter.addEventListener("change", filterPets);
areaFilter.addEventListener("change", filterPets);


// Function that filters the pet list
function filterPets() {

    const selectedStatus = statusFilter.value;
    const selectedArea = areaFilter.value;

    const filteredPets = pets.filter(function(pet) {

        const statusMatches =
            selectedStatus === "All" ||
            pet.status === selectedStatus;

        const areaMatches =
            selectedArea === "All" ||
            pet.area === selectedArea;

        return statusMatches && areaMatches;
    });

    // Display only the matching pets
    displayPets(filteredPets);
}
