const pesan = [
  "You’re simple, yet the way you change my day feels special.",
  "Mengenalmu itu seperti membaca puisi pelan-pelan,",
  "makin dibaca makin terasa.",
  "Kamutu kayak lagu favorit deh, sekali dengar pengennya diulang terus wkwk"
];

let index = 0;
let mulai = false;

function nextLove() {
  const teks = document.getElementById("text");
  const lagu = document.getElementById("lagu");

  if (!mulai) {
    lagu.volume = 0.6;
    lagu.play();
    mulai = true;
  }

  teks.innerText = pesan[index];
  index++;

  if (index >= pesan.length) index = 0;
}
