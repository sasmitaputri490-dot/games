const animals = [
    { name: "kucing", img: "https://i.ibb.co/5MvJ0nL/cat.jpg" },
    { name: "anjing", img: "https://i.ibb.co/jV9wcj5/dog.jpg" },
    { name: "gajah", img: "https://i.ibb.co/dLMNwhH/elephant.jpg" },
    { name: "singa", img: "https://i.ibb.co/ggw4SGg/lion.jpg" },
    { name: "kelinci", img: "https://i.ibb.co/8dKrQvn/rabbit.jpg" }
];

let current = 0;
let score = 0;

function loadAnimal() {
    const img = document.getElementById("animalImage");
    img.src = animals[current].img;
    document.getElementById("answerInput").value = "";
    document.getElementById("feedback").textContent = "";
}

function checkAnswer() {
    const input = document.getElementById("answerInput").value.toLowerCase();
    const feedback = document.getElementById("feedback");

    if (input === animals[current].name) {
        feedback.textContent = "Benar! 🎉";
        feedback.style.color = "green";
        score++;
        document.getElementById("score").textContent = `Skor: ${score}`;
    } else {
        feedback.textContent = "Salah 😢";
        feedback.style.color = "red";
    }
}

function nextAnimal() {
    current = Math.floor(Math.random() * animals.length);
    loadAnimal();
}

// Load pertama kali
loadAnimal();
