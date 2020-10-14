(function (document) {

  window.onclick = function(event) {
    if (event.target.className == 'modal') {
      // console.log('Will close modal');
      // console.log(event.target);
      event.target.style.visibility = 'hidden';
      event.target.style.opacity = '0';
    }
  }

})(document);
