export const ADMIN_ROUTE = '/admin';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const ORDER_ROUTE = '/order';

export const ORDER_HEADER = [
    "№",
    "Дата",
    "Адрес",
    "Заявитель",
    "Исполнитель",
    "Комментарий"
]

export const API_URL = 'http://localhost:5000/'

export const colorStatus = [
    {color: "#d73d6c", status: "Создано" },
    {color: "#d57276", status: "Исполнитель потвердил" },
    {color: "#d6c2bc", status: "Выполнено" },
    {color: "#c0cccc", status: "Проверено" },
    {color: "#65b2c6", status: "Закрыта" },
    {color: "#6f6c9e", status: "Не выполнена"}
]