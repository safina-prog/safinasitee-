// Массив для отслеживания количества каждого товара
let quantities = [0, 0];

// Функция для добавления товара в корзину
function addToCart(button, index) {
    var quantityDiv = button.closest('.card-body').querySelector('.quantity');
    var totalPriceDiv = button.closest('.card-body').querySelector('.total-price');
    var kgSpan = button.closest('.card-body').querySelector('.kg');
    var price = parseInt(button.closest('.card-body').querySelector('.price').dataset.price);

    // Показать кнопки для изменения количества
    quantityDiv.style.display = 'inline-block';
    totalPriceDiv.style.display = 'inline-block';
    button.style.display = 'none';  // Скрыть кнопку "Добавить в корзину"
    
    // Установить начальное количество
    kgSpan.textContent = 1;

    // Обновить количество товара в массиве
    quantities[index] = 1;

    // Показать итоговую цену
    updateTotalPrice();
}

// Функция для увеличения количества
function increaseQuantity(button, index) {
    var kgSpan = button.closest('.quantity').querySelector('.kg');
    var currentQuantity = parseInt(kgSpan.textContent);
    var price = parseInt(button.closest('.card-body').querySelector('.price').dataset.price);

    kgSpan.textContent = currentQuantity + 1;  // Увеличиваем количество на 1
    quantities[index] = currentQuantity + 1;

    // Обновить итоговую цену
    updateTotalPrice();
}

// Функция для уменьшения количества
function decreaseQuantity(button, index) {
    var kgSpan = button.closest('.quantity').querySelector('.kg');
    var currentQuantity = parseInt(kgSpan.textContent);
    var price = parseInt(button.closest('.card-body').querySelector('.price').dataset.price);

    if (currentQuantity > 1) {
        kgSpan.textContent = currentQuantity - 1;  // Уменьшаем количество на 1
        quantities[index] = currentQuantity - 1;
    }

    // Обновить итоговую цену
    updateTotalPrice();
}

// Функция для обновления общей цены
function updateTotalPrice() {
    var totalPrice = 0;
    var prices = document.querySelectorAll('.price');
    for (let i = 0; i < prices.length; i++) {
        var price = parseInt(prices[i].dataset.price);
        totalPrice += price * quantities[i];
    }

    // Показать общую цену
    document.getElementById('total-price').textContent = totalPrice;
}
