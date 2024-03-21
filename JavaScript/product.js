// This script is for the toggle image in whenever hover in the Picture. 
// This is for the toggle for the first image. 
function toggle(element) {
    const images = ['../images/printer8.png', '../images/printer9.png'];
    let currentImageIndex = 0;

    function changeImage() {
        document.getElementById('1').src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    element.intervalId = setInterval(changeImage, 2000);
}

function resetImage(element) {
    clearInterval(element.intervalId);
    document.getElementById('1').src = '../images/printer8.png';
}

// This is for the toggle for the second image. 
function toggleSecond(element) {
    const images = ['../images/printer10.png', '../images/printer11.jpg'];
    let currentImageIndex = 0;

    function changeSecondImage() {
        document.getElementById('2').src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    element.intervalId = setInterval(changeSecondImage, 2000);
}

function resetSecondImage(element) {
    clearInterval(element.intervalId);
    document.getElementById('2').src = '../images/printer10.png';
}

// This is for the toggle for the third image. 
function toggleThird(element) {
    const images = ['../images/printer12.png', '../images/printer13.png'];
    let currentImageIndex = 0;

    function changeThirdImage() {
        document.getElementById('3').src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    element.intervalId = setInterval(changeThirdImage, 2000);
}

function resetThirdImage(element) {
    clearInterval(element.intervalId);
    document.getElementById('3').src = '../images/printer12.png';
}

// This is for the toggle for the forth image. 
function toggleForth(element) {
    const images = ['../images/printer14.png', '../images/printer15.jpg'];
    let currentImageIndex = 0;

    function changeForthImage() {
        document.getElementById('4').src = images[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    element.intervalId = setInterval(changeForthImage, 2000);
}

function resetForthImage(element) {
    clearInterval(element.intervalId);
    document.getElementById('4').src = '../images/printer14.png';
}


// This is for the toggle by click for the third column first image. 
function changes() {
    let element1= document.getElementById("first");
    let element2 = document.getElementById("second");

    if (element1.style.display === "none") {
        element1.style.display = "block";
        element2.style.display = "none";
    } else {
        element1.style.display = "none";
        element2.style.display = "block";
    }
}

// This is for the toggle by click for the third column second image. 
function changeSecond() {
    let element1= document.getElementById("third");
    let element2 = document.getElementById("forth");

    if (element1.style.display === "none") {
        element1.style.display = "block";
        element2.style.display = "none";
    } else {
        element1.style.display = "none";
        element2.style.display = "block";
    }
}

// This is for the toggle by click for the third column second image. 
function changeThird() {
    let element1= document.getElementById("fifth");
    let element2 = document.getElementById("sixth");

    if (element1.style.display === "none") {
        element1.style.display = "block";
        element2.style.display = "none";
    } else {
        element1.style.display = "none";
        element2.style.display = "block";
    }
}

// This is for the toggle by click for the third column second image. 
function changeForth() {
    let element1= document.getElementById("seventh");
    let element2 = document.getElementById("eighth");

    if (element1.style.display === "none") {
        element1.style.display = "block";
        element2.style.display = "none";
    } else {
        element1.style.display = "none";
        element2.style.display = "block";
    }
}
