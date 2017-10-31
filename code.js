(function() {

  var input = document.getElementById('pending_subscriber_email');
  var form = document.getElementById('new_pending_subscriber');
  var elem = document.createElement('div');
  elem.id = 'notify';
  elem.style.display = 'none';

  form.appendChild(elem);

  input.addEventListener('invalid', function(event) {
    event.preventDefault();
    if (!event.target.validity.valid) {
      input.className = 'invalid animated shake';
      elem.textContent = 'There are deliverability issues with AOL mail. Please signup using another email address. Thank you.';
      elem.className = 'error';
      elem.style.display = 'block';
    }
  });

  input.addEventListener('input', function(event) {
    if ('block' === elem.style.display) {
      input.className = '';
      elem.style.display = 'none';
    }
  });

})();
