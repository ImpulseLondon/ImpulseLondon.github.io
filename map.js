function setupMap() {
    var map = L.map('map').setView([51.5136, -0.1310], 13); // Center the map on London

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of clinic locations
    const clinics = [
        { name: '56 Dean Street, London - Sexual Health Clinic', lat: 51.5136, lng: -0.1310 },
        { name: 'Mortimer Market Centre, including the Margaret Pyke Centre', lat: 51.5235, lng: -0.1360 },
        { name: 'Burrell Street Sexual Health Clinic', lat: 51.5052, lng: -0.1003 },
        { name: 'John Hunter Clinic for Sexual Health', lat: 51.4876, lng: -0.1738 },
        { name: 'The Archway Sexual Health Clinic', lat: 51.5664, lng: -0.1353 }
        // Add more clinics as needed
    ];

    // Loop through the clinics array and add a marker for each
    clinics.forEach(function(clinic) {
        var marker = L.marker([clinic.lat, clinic.lng]).addTo(map);
        marker.bindPopup(clinic.name);
    });
}

document.addEventListener('DOMContentLoaded', setupMap);
