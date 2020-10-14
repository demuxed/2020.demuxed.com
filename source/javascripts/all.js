(function (document) {
  window.onclick = function(event) {
    if (event.target.className == 'modal') {
      hideTalkModal(event)
    }
  }
})(document);

function hideTalkModal(event) {
  event.preventDefault();
  event.target.closest('.modal').style.visibility = 'hidden';
  event.target.closest('.modal').opacity = '0';
}

function showTalkModal(event, name) {
  event.preventDefault();
  document.getElementById(name).style.visibility = 'visible';
  document.getElementById(name).style.opacity = '1';
}
