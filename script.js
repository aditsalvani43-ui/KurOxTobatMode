document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".tool-card");
  const worldClockBtn = document.getElementById("world-clock");
  const worldClockSection = document.getElementById("world-clock-container");

  // Event klik card biasa
  cards.forEach(card => {
    card.addEventListener("click", () => {
      if (card.id !== "world-clock") {
        alert(`Kamu memilih: ${card.textContent.trim()} - Quotes Islami`);
      }
    });
  });

  // Toggle Jam Dunia
  worldClockBtn.addEventListener("click", () => {
    worldClockSection.classList.toggle("hidden");
  });

  // Fungsi update jam dunia
  function updateWorldClock() {
    const now = new Date();

    const jakarta = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" }));
    document.getElementById("time-jakarta").textContent = jakarta.toLocaleTimeString();

    const london = new Date(now.toLocaleString("en-US", { timeZone: "Europe/London" }));
    document.getElementById("time-london").textContent = london.toLocaleTimeString();

    const mecca = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Riyadh" }));
    document.getElementById("time-mecca").textContent = mecca.toLocaleTimeString();

    const ny = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    document.getElementById("time-ny").textContent = ny.toLocaleTimeString();

    const tokyo = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tokyo" }));
    document.getElementById("time-tokyo").textContent = tokyo.toLocaleTimeString();
  }

  setInterval(updateWorldClock, 1000);
  updateWorldClock();

  // ===== Musik Latar =====
  const player = document.getElementById("player");
  const musicToggle = document.getElementById("musicToggle");
  const musicVol = document.getElementById("musicVol");
  const musicUrl = document.getElementById("musicUrl");
  const setMusic = document.getElementById("setMusic");

  // Play / Pause
  musicToggle.addEventListener("click", () => {
    if (player.paused) {
      player.play().catch(err => console.log("Butuh interaksi user:", err));
    } else {
      player.pause();
    }
  });

  // Volume control
  musicVol.addEventListener("input", () => {
    player.volume = musicVol.value;
  });

  // Set custom URL
  setMusic.addEventListener("click", () => {
    if (musicUrl.value.trim() !== "") {
      player.src = musicUrl.value.trim();
      player.play().catch(err => console.log("Gagal play URL:", err));
    }
  });
});
