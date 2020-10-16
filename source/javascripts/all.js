(function (document) {
  // Close the open modal when clicked outside
  window.onclick = function(event) {
    if (event.target.className == 'modal') {
      hideTalkModal(event)
    }
  }

  // Close all modals on escape key
  document.onkeydown = function(event) {
    if (event.key === "Escape" || event.key === "Esc") {
      document.querySelectorAll('.modal').forEach(modal => {
        modal.style.visibility = 'hidden';
        modal.opacity = '0';
      })
    }
  }
})(document);

// Hide a modal given an event
function hideTalkModal(event) {
  event.preventDefault();
  event.target.closest('.modal').style.visibility = 'hidden';
  event.target.closest('.modal').opacity = '0';
}

// Show a modal given a talk name
function showTalkModal(event, name) {
  event.preventDefault();
  document.getElementById(name).style.visibility = 'visible';
  document.getElementById(name).style.opacity = '1';
}
