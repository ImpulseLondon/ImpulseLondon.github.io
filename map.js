function setupMap() {
    var map = L.map('map').setView([51.5136, -0.1310], 13); // Center the map on Central London

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Array of clinic locations with detailed information
    const clinics = [
        { name: '56 Dean Street', lat: 51.5136, lng: -0.1310, phone: '020 3315 5656', url: 'https://www.dean.st/' },
        { name: 'Mortimer Market Centre', lat: 51.5235, lng: -0.1360, phone: '020 3317 5100', url: 'https://www.mortimermarket.nhs.uk/' },
        { name: 'Burrell Street Sexual Health Clinic', lat: 51.5052, lng: -0.1003, phone: '020 7188 6666', url: 'https://www.burrellstreet.co.uk/' },
        { name: 'John Hunter Clinic for Sexual Health', lat: 51.4876, lng: -0.1738, phone: '020 3315 1010', url: 'https://www.chelwest.nhs.uk/services/hiv-sexual-health/clinics/john-hunter-clinic' },
        { name: 'The Archway Sexual Health Clinic', lat: 51.5664, lng: -0.1353, phone: '020 7683 4103', url: 'https://www.whittington.nhs.uk/default.asp?c=28069' }
        // Add more clinics as needed
    ];

    // Loop through the clinics array and add a marker for each
    clinics.forEach(function(clinic) {
        var marker = L.marker([clinic.lat, clinic.lng]).addTo(map);
        var popupContent = `<strong>${clinic.name}</strong><br>Phone: ${clinic.phone}<br><a href="${clinic.url}" target="_blank">Website</a>`;
        marker.bindPopup(popupContent);
    });
}

document.addEventListener('DOMContentLoaded', setupMap);
