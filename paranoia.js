var arr = [
    {
        userName: "Jonh",
        lastName: "Vick",
        email: "john.vick@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrey",
        lastName: "Sokolov",
        email: "andrey.sokolov@meta.com"
    },
    {
        userName: "Dmitro",
        lastName: "Djuz",
        email: "DDjuz@yahoo.ua"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки email адреси
var emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Фільтруємо адреси за вказаним регулярним виразом
var trustedEmails = arr
    .filter(function (item) {
        return emailRegex.test(item.email);
    })
    .map(function (item) {
        return item.email;
    });

console.log(trustedEmails);