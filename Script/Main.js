const target = "https://polisen.se/api/events";
const div = document.getElementById("info-div")
const map = L.map('map').setView([62.0, 15.0], 5)


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


fetch(target)
.then(resp => resp.json())
.then(data => {
    console.log(data);

    data.slice(0,40).forEach(information => {

        const fullInforamtion = "https://polisen.se" + information.url;

        if(information.location?.gps) {
            const coords = information.location.gps.split(',');
            L.marker(coords).addTo(map).bindPopup(`
            <div style="font-family: sans-serif;">
                <h4 style="margin: 0; color: #003399;">${information.type}</h4>
                <p style="font-size: 12px; margin: 5px 0;"><b>Plats:</b> ${information.location.name}</p>
                <p style="font-size: 13px;">${information.summary}</p>
                <small style="color: gray;">${information.datetime}</small>
                <a href="${fullInforamtion}" target="_blank" style="color: blue; font-weight: bold;">
                    Läs mer på polisen.se
                </a>
            </div>
        `);
        }
    });
    
})