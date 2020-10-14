(function (document) {

  window.onclick = function(event) {
    if (event.target.className == 'modal') {
      event.target.style.visibility = 'hidden';
      event.target.style.opacity = '0';
    }
  }

})(document);

function closeModal(event, t) {
  event.preventDefault();
  t.closest('.modal').style.visibility = 'hidden';
  t.closest('.modal').opacity = '0';
}

function showModal(event, name) {
  event.preventDefault();
  document.getElementById(name).style.visibility = 'visible';
  document.getElementById(name).style.opacity = '1';
}
