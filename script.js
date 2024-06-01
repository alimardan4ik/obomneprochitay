document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Спасибо за ваше сообщение!');
    // Здесь вы можете добавить код для обработки отправки формы
    this.reset();
});
