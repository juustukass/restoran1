document.addEventListener("DOMContentLoaded", function () {
    let registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", function () {
        let nameInput = document.getElementById("имя");
        let emailInput = document.getElementById("email");
        let passwordInput = document.getElementById("пароль");

        if (nameInput.value === "" || emailInput.value === "" || passwordInput.value === "") {
            alert("Пожалуйста, заполните все необходимые поля.");
            return;
        }

        if (passwordInput.value.length < 8) {
            alert("Минимальная длина пароля должна быть 8 символов.");
            return;
        }
        if (/\d/.test(nameInput.value)) {
            alert("Имя не должно содержать цифры.");
            return;
        }


        showMessage();
    });

    function showMessage() {
        alert("Регистрация успешно завершена!");
    }
});

