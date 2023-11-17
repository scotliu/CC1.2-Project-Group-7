// Authored by Luc Milburn
// This script is responsible for clicking on cards; when clicked, the image becomes opaque and text appears.
// When clicked again, the image returns to its original state.

var cardClick = document.querySelectorAll(".card_border");

for (let i = 0; i < cardClick.length; i++) {
  cardClick[i].addEventListener('click', function() {
    if (cardClick[i].children[0].style.opacity == "0.3") {
      cardClick[i].children[0].style.opacity = "1";
      cardClick[i].removeChild(cardClick[i].children[1]);
    }
    else {
      cardClick[i].children[0].style.opacity = "0.3";
      let cardParagraph = document.createElement('p');
      var cardText = null;
      var cardTitle = null;
      if (cardClick[i].children[0].id == 'jeff_image') {
        cardText = document.createTextNode("Justin Jefferson - Wide Receiver for the Minnesota Vikings");
      }
      else if (cardClick[i].children[0].id == 'saquon_image') {
        cardText = document.createTextNode("Saquon Barkley - Running Back for the New York Giants");
      }
      else if (cardClick[i].children[0].id == 'travis_image') {
        cardText = document.createTextNode("Travis Kelce - Tight End for the Kansas City Chiefs");
      }
      else {
        cardText = document.createTextNode("Joe Burrow - Quarterback for the Cincinnati Bengals");

      }
      cardParagraph.appendChild(cardText);
      cardClick[i].appendChild(cardParagraph);
    }
  });
}