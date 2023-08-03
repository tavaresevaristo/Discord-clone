
function updateDownloadButtonText() {

  const downloadButton = document.querySelector('#download-button span');
  const userAgent = navigator.userAgent.toLowerCase();

  if (/win(dows)?/.test(userAgent)) {
    downloadButton.textContent = "Baixar para Windows";
  }
  if (/linux/.test(userAgent)) {
    downloadButton.textContent = "Baixar Para Linux";
  }
  if (/iphone|ipad|ipod/.test(userAgent)) {
    downloadButton.textContent = "Baixar no App Store";
  }
  if (/android/.test(userAgent)) {
    downloadButton.textContent = "Baixar No Google Play";
  }
}

// Chame a função quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", updateDownloadButtonText);

function updateDownloadButtonText2() {

  const downloadButton = document.querySelector('#download-button2 span');
  const userAgent = navigator.userAgent.toLowerCase();

  if (/win(dows)?/.test(userAgent)) {
    downloadButton.textContent = "Baixar para Windows";
  }
  if (/linux/.test(userAgent)) {
    downloadButton.textContent = "Baixar Para Linux";
  }
  if (/iphone|ipad|ipod/.test(userAgent)) {
    downloadButton.textContent = "Baixar no App Store";
  }
  if (/android/.test(userAgent)) {
    downloadButton.textContent = "Baixar No Google Play";
  }
}

// Chame a função quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", updateDownloadButtonText2);



// footer menu drop

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {

  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {

    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  })

  options.forEach(option => {

    option.addEventListener('click', () => {

      selected.innerText = option.innerText

      selected.classList.remove('select-clicked');

      caret.classList.remove('caret-rotate');

      menu.classList.remove('menu-open');

      options.forEach(option => {
        option.classList.remove('active');
      })

      option.classList.add('active');

      // actualizar a flag
      const flagPath = option.dataset.flag;
      document.querySelector('.select img').src = flagPath;

    })
  })

});
