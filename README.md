# Telegram URL Test For Byndyusoft

Привет! Здесь тест, написанный с использованием фреймворка Cypress. Он проверяет URL Telegram в разделе контактов на сайте Byndyusoft.com. Буду рад вопросам и рекомендациям по улучшению теста.

## Описание

Тест выполняет шаги:

1. Переход на главную страницу Google.
2. Ввод поискового запроса "Byndyusoft" и запуск поиска.
3. Клик по результату поиска, соответствующему Byndyusoft.
4. Проверка, что текущий URL совпадает с ожидаемым URL Byndyusoft.
5. Нажатие на кнопку "Презентация" на сайте Byndyusoft.com.
6. Проверка URL у кнопки Telegram, чтобы удостовериться, что он совпадает с ожидаемым URL Telegram.

## Установка и Запуск

1. Клонируйте репозиторий:
    ```
    git clone https://github.com/valentin-kushnarev/byndyusoft.git
    ```

2. Установите зависимости:
    ```
    npm install
    ```

3. Запустите тесты с помощью Cypress:
    ```
    npx cypress open
    ```

## Файлы

- **Тест**: Расположен в cypress/e2e/checkingContacts.cy.js
- **Данные для теста**: Находятся в файле cypress/fixtures/data.json
