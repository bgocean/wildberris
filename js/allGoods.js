const allGoods = function() {
  const viewAll = document.querySelector('.more');
  
  viewAll.addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращение стандартного поведения ссылки
    window.location.href = 'goods.html';
  });
}

allGoods();
