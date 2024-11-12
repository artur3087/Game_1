console.log("Hello world!") // Testing ;) //

const card1 = document.querySelector("#card1");

card1.addEventListener("click", () => {
    card1.classList.toggle("flipCard");
})

const card2 = document.querySelector("#card2");

card2.addEventListener("click", () => {
    card2.classList.toggle("flipCard");
})