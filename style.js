const pesan = [
  "Aku sayang kamu, serius 🤍",
  "Bersamamu itu tenang 😌",
  "Terima kasih sudah hadir di hidupku 💕",
  "Kalau capek, pulang ke aku ya 🏡",
  "Aku mau sama kamu, lama 🤍"
];

let index = 0;
let laguDiputar = false;

function playLove() {
  const teks = document.getElementById("text");
  const lagu = document.getElementById("lagu");

  if (!laguDiputar) {
    lagu.play();
    laguDiputar = true;
  }

  teks.innerText = pesan[index];
  index++;

  if (index >= pesan.length) {
    index = 0;
  }
}
