document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul').addEventListener('click', function(e) {
    e.target.classList.toggle('checked');
  })

  const cols = document.querySelectorAll('.close')
  cols.forEach(function(d) {
    d.addEventListener('click', function(d) {
      // debugger
      d.target.parentElement.remove();
    })
  })
})
