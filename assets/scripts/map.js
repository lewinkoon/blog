var map = L.map('map').setView([42.9638, -5.0262], 14);
L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {attribution: '© OpenStreetMap'}).addTo(map);