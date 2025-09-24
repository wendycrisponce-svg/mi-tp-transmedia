const btnEntrar = document.getElementById("btnEntrar");
const inicio = document.getElementById("inicio");
const pagina = document.getElementById("pagina");

btnEntrar.addEventListener("click", () => {
  inicio.style.display = "none";   // Oculta la pantalla de inicio
  pagina.style.display = "block"; // Muestra el resto de la web
});


// 🎵 Primer audio
const Maudio = document.getElementById("MELODIA");
const Mboton = document.getElementById("melodia");

Mboton.addEventListener("click", () => {
  if (Maudio.paused) {
    Maudio.play();
    Mboton.innerText = "⏸️ Pausar"; 
  } else {
    Maudio.pause();
    Mboton.innerText = "▶️ Reproducir"; 
  }
});

// 🎧 Segundo audio
const audio = document.getElementById("audiopodscats");
const boton = document.getElementById("posdcats");

boton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    boton.innerText = "⏸️ Pausar"; 
  } else {
    audio.pause();
    boton.innerText = "▶️ Reproducir"; 
  }
});


const btnFooter = document.getElementById("btnFooter");
const footer = document.getElementById("footer");

btnFooter.addEventListener("click", () => {
  footer.scrollIntoView({ behavior: "smooth" });
});

