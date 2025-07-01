
//  Afficher Pop-up
window.onload = function() {
  document.getElementById('popup').classList.add('active');
};

// closeBtn pour fermer
document.getElementById('closeBtn').onclick = function() {
  document.getElementById('popup').classList.remove('active');
};
