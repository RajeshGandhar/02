const container = document.querySelector('.heart-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDelay = Math.random() * 3 + 's';
  heart.style.animationDuration = Math.random() * 5 + 6 + 's';
  heart.style.width = Math.random() * 30 + 10 + 'px';
  heart.style.height = heart.style.width;

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 8000);
}

setInterval(createHeart, 200);

// Countdown timer
const targetDate = new Date('2025-01-15T00:00:00');
setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Dark Mode Toggle
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// Toggle Love Letter Visibility
const loveLetterButton = document.querySelector('.love-letter-toggle');
const loveLetterSection = document.getElementById('love-letter');

loveLetterButton.addEventListener('click', () => {
  loveLetterSection.style.display = (loveLetterSection.style.display === 'block') ? 'none' : 'block';
});
// Shayari functionality
const shayariButton = document.querySelector('.shayari-toggle');
const shayariSection = document.getElementById('shayari');
const nextShayariButton = document.getElementById('next-shayari');
const shayariText = document.getElementById('shayari-text');

// Shayari list
const shayaris = [
  '"तेरी आँखों में वो कहानी छिपी है, जिसे मैं हर दिन सुनना चाहता हूँ।"',
  '"😍तेरा माथा चूमकर तुझे मना लेंगे, मसले कैसे भी हो सुलझा लेंगे😍"',
  '"😁😁तू नगर निगम की JCB मैं हूँ अवैध निर्माण प्रिये, जब जब तुमको देखू मै मेरे थर थर कापे प्राण  प्रिये 😁😁"',
  '"bhago yaa se😁 "',
  '"❤️Dekha na tha toye aakho se Tere dil ko dekh kar pyar kar izhaar kar dea Irade kya the tumhare ye tum jaano Par Humne to pahal or  akhiri pyar tumhe hai khadea❤️"',
  '"❤️toje ek baar pir maanya ja sake Us pyar ke Deepak ko pir se jalaya jasake Toj par khud ka haak jatya ja saake Pyar se toje sataya ja sake Krishna ko Radha se milaya ja sake In jhooti ummedo ko sach mannya ja sake Manya ja sake Manya ja sake ❤️"'
];

// Show random Shayari on button click
let currentShayariIndex = 0;
nextShayariButton.addEventListener('click', () => {
  currentShayariIndex = (currentShayariIndex + 1) % shayaris.length;
  shayariText.textContent = shayaris[currentShayariIndex];
});

// Toggle Shayari Section visibility
shayariButton.addEventListener('click', () => {
  shayariSection.style.display = (shayariSection.style.display === 'block') ? 'none' : 'block';
});

