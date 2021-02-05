// main.js

function changeSrc() {
    if (document.getElementById("radio-air-horn").checked) {
      document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    } else if (document.getElementById("radio-car-horn").checked) { 
      document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    } else if (document.getElementById("radio-party-horn").checked) { 
      document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    }
}

// TODO
