document.addEventListener('DOMContentLoaded', function() {

  //功能1
  document.querySelector('ul').addEventListener('click', function(e) {
    e.target.classList.toggle('checked');
  })

  //功能2
  const cols = document.querySelectorAll('.close')
  cols.forEach(function(d) {
    d.addEventListener('click', function(d) {
      // debugger
      d.target.parentElement.remove();
    })
  })

  //功能3
  document.querySelector('#addBtn').addEventListener('click', function(e) {
    // debugger
    const inputValue = e.target.previousElementSibling.value;
    const newUl = document.querySelector('ul');
    const newLi = document.createElement('li');
    newLi.innerHTML = inputValue + '<span class="close">x</span>'
    newUl.appendChild(newLi);
    e.target.previousElementSibling.value = '';
    //重新綁上監聽
    newLi.firstElementChild.addEventListener('click', function() {
      newLi.remove();
    })
  })

})
