const proxy = "https://cors-anywhere.herokuapp.com/";
const target = "https://polisen.se/api/events";
const div = document.getElementById("info-div")


fetch(proxy + target)
.then(resp => resp.json())
.then(data => {
    console.log(data);

    data.forEach(information => {
    });
    
})