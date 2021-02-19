let timer = 30;
let munition = 24;
let score = 0;
let compteur = document.querySelector('.decompteur');
compteur.innerText(score);
var popupElement = document.getElementById('popupReplay');
var message = document.getElementById('message');
var munitionElement = document.querySelector('.munition');
element.classList.add('d-none');
$('img').show();
let img = document.querySelectorAll('img').classList.add('d-none');

const startRound = () => {
  img.classList.remove('d-none');
  timer = 30;
  score = 0;
  compteur.innerText(score);
  munitionElement.innerText(munition);

  $('body').click(function (e) {
    munitionElement.innerText(munition--);
    if (munition == 0) {
      popupElement.classList.remove('d-none');
      message.innerText('vous etes a court de munition vous avez perdu !!');
      e.stopPropagation();
      munition = 24;
      munitionElement.innerText(munition);
      startRound();
      restart();
    }
  });
  function initGame() {
    score = 0;
    timer = 30;
    compteur.innerText(score);
    startRound();
  }

  document.getElementById('startGame').addEventListener('click', () => {
    initGame();
  });

  $('.bird1').click(function () {
    $('.bird1').hide();
    $('.bird2').show();
    $('.bird3').show();
    $('.bird4').show();
    $('.bird5').show();
    $('.bird6').show();
    $('.bird7').show();
    $('.bird8').show();
    $('.bird9').show();
  });
  $('.bird2').click(function () {
    $('.bird2').hide();
    $('.bird1').show();
    $('.bird3').show();
    $('.bird4').show();
    $('.bird5').show();
    $('.bird6').show();
    $('.bird7').show();
    $('.bird8').show();
    $('.bird9').show();
  });
  $('.bird3').click(function () {
    $('.bird3').hide();
    $('.bird1').show();
    $('.bird2').show();
    $('.bird4').show();
    $('.bird5').show();
    $('.bird6').show();
    $('.bird7').show();
    $('.bird8').show();
    $('.bird9').show();
  });
  $('.bird4').click(function () {
    $('.bird4').hide();
    $('.bird1').show();
    $('.bird2').show();
    $('.bird3').show();
    $('.bird5').show();
    $('.bird6').show();
    $('.bird7').show();
    $('.bird8').show();
    $('.bird9').show();
  });
  $('.bird5').click(function () {
    $('.bird5').hide();
    $('.bird1').show();
    $('.bird2').show();
    $('.bird3').show();
    $('.bird4').show();
    $('.bird6').show();
    $('.bird7').show();
    $('.bird8').show();
    $('.bird9').show();
  });
  $('.bird6').click(function () {
    $('.bird6').hide();
    $('.bird1').show();
    $('.bird2').show();
    $('.bird3').show();
    $('.bird4').show();
    $('.bird5').show();
    $('.bird7').show();
    $('.bird8').show();
    $('.bird9').show();
  });
  $('.bird7').click(function () {
    $('.bird7').hide();
    $('.bird1').show();
    $('.bird2').show();
    $('.bird3').show();
    $('.bird4').show();
    $('.bird5').show();
    $('.bird6').show();
    $('.bird8').show();
    $('.bird9').show();
  });
  $('.bird8').click(function () {
    $('.bird8').hide();
    $('.bird1').show();
    $('.bird2').show();
    $('.bird3').show();
    $('.bird4').show();
    $('.bird5').show();
    $('.bird6').show();
    $('.bird7').show();
    $('.bird9').show();
  });
  $('.bird9').click(function () {
    $('.bird9').hide();
    $('.bird1').show();
    $('.bird2').show();
    $('.bird3').show();
    $('.bird4').show();
    $('.bird5').show();
    $('.bird6').show();
    $('.bird7').show();
    $('.bird8').show();
  });
};
result = $('img').click(function (e) {
  console.log('coucou');
  $('.points').text(++score);
  if (score >= 15) {
    e.stopPropagation();
    score = 0;
    $('.decompteur').text(score);
    $('#message').text('vous avez gagner !!');
    startRound();
    $('img').show();
    restart();
  }
});

inter = setInterval(function (e) {
  $('.decompteur').text(timer--);
  if (timer == 0) {
    e.stopPropagation();
    $('#message').text('vous avez perdu!!');
    clearInterval();
    score = 0;
    timer = 30;
    initGame();
  }
}, 1000);

function carouselAuto() {
  //trouvr l'image afficher, la masquer,choisir la suivante, l'afficher

  //trouver l'image a affichee (:visible) la masquer . fadeOut()

  var $imgCourante = $('img:visible');

  //choisir l'image suivante et afficher .fadeIn()
  var $imgNext = $('img:visible').next('img');

  $imgCourante.fadeOut();
  $imgNext.fadeIn();
  //si il n'y a pas d'image suivante la prochaine image a afficher sera la premiere
  if ($imgNext.length == 0) {
    $imgCourante.fadeOut(1000);
    $('img:first').fadeIn(1000);
  } else {
    $imgNext.fadeIn();
    $imgCourante.fadeOut();
  }
}
//la fonction doit se lancer toute les trois secondes;
setInterval(carouselAuto, 0);

initGame();

$('body').click(function () {
  if (click.length >= 16) {
    score = 0;
    alert('fin de la partie vous avez perdu a cause de trop de click !');
    $('.decompteur').text(score);
    startRound();

    $('img').show();
    restart();
  }
});
