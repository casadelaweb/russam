# Russam Redesign

- **Тестовый стенд**: [https://russam.ninthtown.ru/](https://russam.ninthtown.ru/)
- **Прод**: [https://russam.ru/](https://russam.ru/)

## Что используется

### Backend

- **PHP**
- **Nginx**

### Frontend

- **TypeScript**
- **Sass (SCSS)**
- **Webpack**
- **Разметка вынесена в отдельные файлы `template.php` в папке компонента и страницы с указанием
  параметров с помощью `PHPDoc`.**

## Структура проекта

- `core/` — упрощенный mvc framework. используется в качестве базового бэка. туда лезть не нужно.
- `configuration/`— туда тоже лезть не нужно.
- `public/assets/` — собранные фронтовые ассеты


- `src/` — исходный код
- `src/assets` — статичные файлы, иконки, изображения и прочее
- `src/modules` — локальные модули и библиотеки
- `src/scripts` — общие скрипты и хелперы
- `src/styles` — общие и shared стили
- `src/views` — компоненты и страницы

## Подробнее о компонентах

Каждый компонент или страница представляет собой набор определенных файлов. Например:

- `src/views/components/cards/index.ts` — точка входа для webpack
- `src/views/components/cards/productCard.ts` — скрипты компонента
- `src/views/components/cards/productCard.scss` — стили компонента
- `src/views/components/cards/template.php` — разметка компонента. Если данные динамически,
  переменные описаны в `PHPDoc`.

## Окружения

- **Тестовый стенд**: [https://russam.ninthtown.ru/](https://russam.ninthtown.ru/)
- **Продакшн**: [https://russam.ru/](https://russam.ru/)

## Как развернуть

1. Клонировать
   ```bash
   git clone https://github.com/casadelaweb/russam.git
   cd russam
   ```

2. Установить зависимости
   ```bash
   composer install
   npm install
   ```

3. Поднять
    ```bash
   // включить docker
   docker-compose up -d
   npm run start
   
   // ИЛИ если php8.2+ есть локально
   // поднимется встроенный сервак пхп 
   composer run serve
   npm run start
    ```

4. Собрать
   ```bash
    npm run dev
   ```
5. Собрать и оптимизировать стили и скрипты
   ```bash
   npm run build
   ```
6. По окончании работы/просмотра
    ```bash
   // вырубить контейнер
    docker-compose down
    ```   

