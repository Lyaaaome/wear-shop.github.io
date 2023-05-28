$('document').ready(function() {
    loadGoods();
});

function loadGoods() {
    // загружаю товары на страницу
    $.getJSON('cart.json', function(data) {
        console.log(data);
    })
}