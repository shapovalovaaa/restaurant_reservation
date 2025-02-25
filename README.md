# Требования к проекту
## 1 Введение
Целью проекта является разработка веб-приложения для бронирования столиков в ресторанах.
### 1.1 Назначение
Предполагается, что использовать данное приложение будут посетители, имеющие доступ в интернет. Автоматизированная система позволит сэкономить время на бронирование нужного столика в определенном ресторане, исходя из свободных дат и загруженности ресторанов, кроме того приложение будет иметь систему авторизации.
### 1.2 Бизнес-требования
Внедрение сайта позволит сократить время на ведение брони в ресторанах вручную, уменьшить число возможных ошибок данных клиентов, необходимых для бронирования, а также проводить анализ загруженности определенных ресторанов в разные дни недели. Использование системы бронирования позволяет сократить время посетителей и круглосуточно бронировать столики параллельно с деятельностью ресторанов и иметь возможность подобрать оптимальный вариант из списка доступных. Это привлекает больше посетителей и повышает эффективность работы.
## 2 Требования пользователя
### 2.1 Программные интерфейсы
Интерфейс системы бронирования должен быть простым и интуитивно понятным для пользователей.
При разработке программного продукта используются:
- система управления базами данных (СУБД) - MongoDB
- языки программирования React.js, Node.js
- веб-фреймфорк - Express
### 2.2 Интерфейс пользователя
Главная страница:
![Main Page](https://github.com/shapovalovaaa/restaurant_reservation/blob/main/Mockups/Main.png)
___
Страница регистрации:
![Registration Page](https://github.com/shapovalovaaa/restaurant_reservation/blob/main/Mockups/Registration.png)
___
Страница авторизации:
![Autorization Page](https://github.com/shapovalovaaa/restaurant_reservation/blob/main/Mockups/Autorization.png)
___
Страница редактирования столика (доступна только администратору):
![Admin Page Example](https://github.com/shapovalovaaa/restaurant_reservation/blob/main/Mockups/Admin.png)
### 2.3 Характеристики пользователей
Целевая аудитория данного приложения - люди с начальными навыками работы с компьтером: умение пользоваться браузером, навигация по сайту, регистрация или авторизация с помощью социальных сетей. Данное приложение разработано для людей, которые хотят забронировать cтолик без особых усилий.
## 3 Системные требования
Для использования приложения необходим один из перечисленных браузеров:
- Chrome
- Firefox
- Internet Explorer версия 10+
- Microsoft Edge
- Opera
- Safari (Windows версия не поддерживается)
### 3.1 Функциональные требования
Система должна обеспечивать возможность выполнения следующих функций:
- авторизация пользователей;
- возможность выбора даты и времени бронирования;
- редактирование брони, создание/удаление пользователей/доступных столиков со стороны администратора;
- добавление или изменение информации о ресторанах
### 3.2 Нефункциональные требования
- приложение должно иметь дружественный дизайн;
- навигация по приложению должна быть простой: у пользователя не должно возникать проблем с поиском и выбором ресторана;
#### 3.2.1 Атрибуты качества
- доступ к основным функциями приложения не более чем за три операции
- все функциональные элементы пользовательского интерфейса имеют названия, описывающие действие, которое произойдет при выборе элемента
#### 3.2.2 Требования к безопасности
Надежное функционирование системы должно быть обеспечено выполнением организационно-технических мероприяитий, таких как:
- использование лицензионного программного обеспечения;
- организация бесперебойного питания путем использования блоков бесперебойного питания;
- обеспечение минимального времени восстановления после отказа.
- загрузка и отображение основного окна программы не должны превышать 5 секунд.
