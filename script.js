document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const answers = {
    q1: "c",
    q2: "b",
    q3: "a", 
    q4: "b", 
    q5: "a", 
  };

  let score = 0;
  let total = Object.keys(answers).length;

  for (let q in answers) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  const result = document.getElementById("quiz-score");
  result.textContent = `You scored ${score} out of ${total}!`;

  result.style.color = score === total ? "green" : "orange";
});

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke-display").textContent =
        `${data.setup} - ${data.punchline}`;
    })
    .catch(error => {
      document.getElementById("joke-display").textContent =
        "Oops! Couldn't fetch a joke right now.";
    });
}
