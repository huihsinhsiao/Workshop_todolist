document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul').addEventListener('click', function(e) {
    e.target.classList.toggle('checked');
  })

  const cols = document.querySelectorAll('li')
  cols.forEach(function(e) {
    e.addEventListener('click', function(e) {
      // debugger
      e.target.parentElement.remove();
    })
  })
})
