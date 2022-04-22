
function createHeart(){
    const heart = document.createElement("div"); 

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw"; 

    heart.style.animationDuration = Math.random() * 1 + 6 + "s";

    heart.innerText = "❤️"; 

    document.body.appendChild(heart);

    setTimeout(
        function(){
        heart.remove();
    },6000);
}

setInterval(createHeart,1000)