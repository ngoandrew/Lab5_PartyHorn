// main.js

// Handle volume number input
document.getElementById("volume-number").addEventListener("input", changeNum);

function changeNum() {
    let volume = document.getElementById("volume-number").value;
    document.getElementById("volume-slider").value = volume;
    
    if(volume == 0) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    } else if (volume >= 1 && volume <= 33) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    } else if (volume >= 34 && volume <= 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    } else if (volume >= 67 && volume <= 100) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
    
    document.getElementById("horn-sound").volume = volume;
    
}

// Handle volume slider input
document.getElementById("volume-slider").addEventListener("input", changeSlider);

function changeSlider() {
    let volume = document.getElementById("volume-slider").value;
    document.getElementById("volume-number").value = volume;
    
    if(volume == 0) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    } else if (volume >= 1 && volume <= 33) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    } else if (volume >= 34 && volume <= 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    } else if (volume >= 67 && volume <= 100) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
    
    document.getElementById("horn-sound").volume = volume;
    
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
    if(document.getElementById("volume-number").value != 0) {    
        document.getElementById("horn-sound").play();
    }
}
