document.addEventListener('DOMContentLoaded', function() {
  setupMap();
  // Example list of places
  const places = [
    { name: '56 Dean Street, London - Sexual Health Clinic', lat: 51.5136, lng: -0.1310 },
    // Add more places here
  ];

  const placesList = document.getElementById('places').getElementsByTagName('ul')[0];
  places.forEach(place => {
    const li = document.createElement('li');
    li.textContent = place.name;
    placesList.appendChild(li);
  });
});
