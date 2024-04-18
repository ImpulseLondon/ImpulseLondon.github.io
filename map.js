function setupMap() {
    var map = L.map('map').setView([51.5136, -0.1310], 15); // Center on 56 Dean Street

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adding a marker for 56 Dean Street
    var marker = L.marker([51.5136, -0.1310]).addTo(map);
    marker.bindPopup('56 Dean Street, London - Sexual Health Clinic');
}

document.addEventListener('DOMContentLoaded', setupMap);
