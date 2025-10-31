const statusText = document.getElementById('status');
const findBtn = document.getElementById('find-btn');

const names = [
  'Budi si Tangan Petir ',
  'Udin Pemecah Batu ',
  'Santi Sang Ninja ',
  'Riko the Destroyer ',
  'Luna si Pembisik Angin ',
  'Agus of Doom ',
  'Rani Cyber Fighter '
];

findBtn.addEventListener('click', () => {
  statusText.textContent = 'Mencari lawan... 🌀';
  findBtn.disabled = true;

  setTimeout(() => {
    const randomName = names[Math.floor(Math.random() * names.length)];
    statusText.textContent = `Kamu akan duel dengan: ${randomName}`;
    findBtn.disabled = false;
  }, 2000);
});
