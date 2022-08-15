var map = L.map('map').setView([42.7206, -6.3933], 14);
L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {attribution: '© OpenStreetMap'}).addTo(map);