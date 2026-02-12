const proxy = "https://cors-anywhere.herokuapp.com/";
const target = "https://polisen.se/api/events";
const div = document.getElementById("info-div")


fetch(proxy + target)
.then(resp => resp.json())
.then(data => {
    console.log(data);

    data.slice(0,20).forEach(information => {
        let name = document.createElement("h3");

        name.textContent = information.name

        div.appendChild(name)

        let summary = document.createElement("p")

        summary.textContent = information.summary

        div.appendChild(summary)

        let location = document.createElement("p")

        location.textContent = information.datetime

        div.appendChild(location)
    });
    
})