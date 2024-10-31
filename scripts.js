// Функция для звонка
function callNumber() {
    window.location.href = "tel:+380638122604"; // Звонок на номер
}

// Функция для перехода в Telegram
function openTelegram() {
    window.open("https://t.me/+380638122604", "_blank");
}

// Функция для написания сообщения в Viber
function openViber() {
    window.open("viber://chat?number=+380638122604", "_blank");
}

// Функция для отображения/скрытия дополнительного текста
function toggleText(textId) {
    const textElement = document.getElementById(textId);
    if (textElement.style.display === "none") {
        textElement.style.display = "block"; // Показать текст
    } else {
        textElement.style.display = "none"; // Скрыть текст
    }
}

// Привязываем события к SVG иконкам
document.querySelector('.svg-icon[alt="Phone"]').addEventListener('click', callNumber);
document.querySelector('.svg-icon[alt="Telegram"]').addEventListener('click', openTelegram);
document.querySelector('.svg-icon[alt="Viber"]').addEventListener('click', openViber);
