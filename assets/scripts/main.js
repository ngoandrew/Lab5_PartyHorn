// main.js

// Handle volume number input
document.getElementById("volume-number").addEventListener("input", changeNum);
function changeNum(e) {
    document.getElementById("volume-number").value = e.target.value;
}

// Handle radio input
document.getElementById("radio-air-horn").addEventListener("click", changeSrc);
document.getElementById("radio-car-horn").addEventListener("click", changeSrc);
document.getElementById("radio-party-horn").addEventListener("click", changeSrc);

function changeSrc() {
    if (document.getElementById("radio-air-horn").checked) {
      document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
      document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
    } else if (document.getElementById("radio-car-horn").checked) { 
      document.getElementById("sound-image").src = "./assets/media/images/car.svg";
      document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
    } else if (document.getElementById("radio-party-horn").checked) { 
      document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
      document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
    }
} 

// Handle honk button
document.getElementById("honk-btn").addEventListener("click", honk);

function honk() {
    //if(document.getElementById("volume-number").value != 0) {    
        document.getElementById("horn-sound").play();
    //}
}
