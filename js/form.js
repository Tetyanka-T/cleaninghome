const form = document.getElementById("form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async function(event) {
  event.preventDefault(); // Зупиняємо стандартне перезавантаження сторінки

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      status.innerText = "Дякуємо! Ваше повідомлення успішно надіслано.";
      status.style.color = "green";
      form.reset(); // Очищаємо поля форми
    } else {
      const result = await response.json();
      if (Object.hasOwn(result, 'errors')) {
        status.innerText = result["errors"].map(error => error["message"]).join(", ");
      } else {
        status.innerText = "Ой! Виникла помилка при відправці.";
      }
      status.style.color = "red";
    }
  } catch (error) {
    status.innerText = "Помилка мережі. Спробуйте пізніше.";
    status.style.color = "red";
  }
});