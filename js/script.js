document.addEventListener("DOMContentLoaded", function () {
  // Crear corazones de forma dinámica y añadir al cuerpo
  for (let i = 0; i < 50; i++) {
    crearCorazon();
  }

  function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.className = "corazon";
    corazon.style.left = `${Math.random() * window.innerWidth}px`; // Posición horizontal aleatoria
    corazon.style.top = `${Math.random() * window.innerHeight}px`; // Posición vertical aleatoria
    corazon.style.animationDuration = `${Math.random() * 2 + 1}s`; // Duración de la animación aleatoria
    document.body.appendChild(corazon);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var audio = document.getElementById("audio");
  var playPauseButton = document.getElementById("playPauseButton");

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = "Pause";
    } else {
      audio.pause();
      playPauseButton.textContent = "Play";
    }
  }

  playPauseButton.addEventListener("click", toggleAudio);
});
