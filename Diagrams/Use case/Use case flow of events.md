Вариант использования "Зарегистрироваться" позволяет неавторизованному пользователю создать учётную запись с использованием электронной почты и пароля.
### Поток события для прецедента "Зарегистрироваться"
#### Основной поток:
1. Вариант использования начинается, когда неавторизованный пользователь переходит по ссылке Register.
2. Приложение отображает страницу, на которой расположена форма для отправки регистрационных данных.
3. Пользователь заполняет необходимые поля.
4. Данные проверяются на соответствие требованиям, если не удовлетворяют, то выполняется альтернативный поток А1.
5. Пользователь перенаправляется на страницу авторизации.
6. Вариант использования завершается.
#### Альтернативный поток А1
1. Пользователю отображаются ошибки заполнения полей, выполняется основной пото с пункта 3.

Вариант использования "Авторизоваться" позволяет неавторизованному пользователю сменить статус на авторизованного пользователя.
### Поток события для прецедента "Авторизоваться"
#### Основной поток:
1. Вариант использования начинется, когда неавторизованный пользователь переходит по ссылке Login или пытается выолнить действие, доступное только для авторизованного пользователя.
2. Приложение выводит страницу, на которой расположена форма для ввода электронной почты и пароля, а также кнопки для использования провайдеров авторизации.
3. Неавторизованный пользователь вводит свои email и пароль.
4. Неавторизованный пользователь нажимает кнопку Login.
5. Сервер проверяет введённые данные. Если они неверны, выполняется альтернативный поток А1.
6. Неавторизованный пользователь переводится в разряд авторизованных.
7. Пользователь перенаправляется на главную страницу.
8. Вариант использования завершается.
#### Альтернативный поток А1
1. Пользователю на странице входа отображается сообщение об ошибке.
2. Выполняется основной поток начиная с пункта 2.
#### Альтернативный поток А2
1. Неавторизованный пользователь переводится в разряд авторизованных.
2. Пользователь перенаправляется на главную страницу.
3. Вариант использования завершается.
#### Альтернативный поток А3
1. Выполняется основной поток начиная с пункта 2.
#### Альтернативный поток А4
1. Отбражается страница с предложением ввести email и для создания учётной записи.
2. Неавторизованный пользователь переводится в разряд авторизованных.
3. Пользователь перенаправляется на главную страницу.
4. Вариант использования завершается.

### Поток события для прецедента "Просмотреть категории заведений"
#### Основной поток:
1. Вариант использования начинается, когда пользователь переходит на главную страницу.
2. Пользователю отображается страница, содержащая категории заведений.
3. Вариант использования завершается.

### Поток события для прецедента "Просмотреть заведения определенной категории"
#### Основной поток:
1. Вариант использования начинается, когда пользователь переходит на страницу заведений выбранной категории.
2. Пользователю отображается страница, содержащая список заведений выбранной категории.
3. Вариант использования завершается.

### Поток события для прецедента "Просмотреть информацию о заведении"
#### Основной поток:
1. Вариант использования начинается, когда пользователь переходит на страницу выбранного заведения.
2. Пользователю отображается страница, содержащая название, картинку, описание заведения и кнопку с возможностью просмотреть подробную информацию о брони столиков.
3. Вариант использования завершается.

### Поток события для прецедента "Просмотреть доступность заведения"
#### Основной поток:
1. Вариант использования начинается, когда пользователь нажимает на кнопку See аvailability определенного заведения из списка.
2. Открывается страница заведения.
3. Если пользователь нажимает на кнопку Reserve now, появляется окно с информацией и доступных столиках
4. Пользователь выбирает столик и нажимает на кнопку Reserve now.
5. Вариант использования завершается.

### Поток события для прецедента "Отменить бронь столика"
#### Основной поток:
1. Вариант использования начинается, когда пользователь нажимает на кнопку Cancel в личном кабинете.
2. Бронь столика отменяется.
3. Вариант использования завершается.
