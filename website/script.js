

document.querySelectorAll('.insta-link').forEach(link => {
  const user = link.dataset.ig;

  // Deep links universais
  const iosURL = `instagram://user?username=${user}`;
  const androidURL = `intent://instagram.com/${user}#Intent;package=com.instagram.android;scheme=https;end`;
  const webURL = `https://www.instagram.com/${user}`;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  link.addEventListener('click', e => {
    e.preventDefault();

    if (isIOS) {
      window.location = iosURL;
      setTimeout(() => window.open(webURL, "_blank"), 400);
    } 
    else if (isAndroid) {
      window.location = androidURL;
      setTimeout(() => window.open(webURL, "_blank"), 400);
    }
    else {
      window.open(webURL, "_blank");
    }
  });
});



  document.querySelectorAll('.address-link').forEach(link => {
    const address = encodeURIComponent(link.dataset.address);

    // Detecta iPhone / iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Define o link correto
    const url = isIOS
      ? `http://maps.apple.com/?q=${address}`
      : `https://www.google.com/maps?q=${address}`;

    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
  });


const popup = document.getElementById("card-popup");
const popupBg = popup.querySelector(".popup-bg");
const popupCard = popup.querySelector(".popup-card");

document.querySelectorAll(".card").forEach(card => {

  card.addEventListener("click", () => {

    // Clona o cartão NORMAL
    const clone = card.cloneNode(true);

    // Procura conteúdo extra
    const extra = card.querySelector(".card-extra");

    if (extra) {
      const extraClone = extra.cloneNode(true);
      extraClone.style.display = "block";   // MOSTRA no popup
      clone.appendChild(extraClone);
    }

    popupCard.innerHTML = "";
    popupCard.appendChild(clone);
    popup.classList.add("active");
  });

});

// Fechar ao clicar fora
popupBg.addEventListener("click", () => {
  popup.classList.remove("active");
});
