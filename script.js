const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".btn-container");

// Make the NO button run away
function moveButton(){

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveButton);

// For phones/tablets
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveButton();
});

// Go to the next page
yesBtn.addEventListener("click", function(){
    window.location.href = "yes.html";
});