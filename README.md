<h1 align="center">
<a href="https://lectrum.io" target="_blank" rel="noopener noreferrer"> <img src="./static/favicon/favicon.svg" alt="Lectrum favicon" width="25" /></a> Интенсив по React</h1>

<br>

<div align="center">
  <!-- Package version -->
    <img src="https://img.shields.io/github/package-json/v/lectrum/react-online-intensive.svg?longCache=true&style=flat-square"
      alt="Package version" />
  <!-- Last commit -->
    <img src="https://img.shields.io/github/last-commit/lectrum/react-online-intensive.svg?longCache=true&style=flat-square"
      alt="Last commit" />
  <!-- Dependencies -->
    <img src="https://img.shields.io/david/lectrum/react-online-intensive.svg"
      alt="Dependencies" />
  <!-- Contributors welcome -->
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg?longCache=true&style=flat-square"
      alt="Last update" />
</div>
<div align="center">
  <!-- Наш Facebook -->
    <a href="https://www.facebook.com/lectrum">
        <img src="https://img.shields.io/badge/%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%B9%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BD%D0%B0%D1%88-Facebook-blue.svg?longCache=true&style=for-the-badge&link=https://www.facebook.com/lectrum"
        alt="Подписывайся на наш Facebook" />
    </a>
</div>

<br>
<br>

<table align="center">
    <tbody>
        <tr>
            <td>
                <h3 align="center">👋🏼 Добро пожаловать на интенсив!</h3>
                <p>
                    🖥&nbsp;Вместе мы построим свою собственную стену с постами<b><code>Facebook</code></b> в режиме онлайн!
                    Так что пристегни ремни — будет интересно. На абордаж! 🔥
                </p>
                <br>
                <p>👨🏽‍🔬&nbsp;Из инструкции ниже ты узнаешь как настроить и использовать проект.</p>
            </td>
        </tr>
    <tbody>
</table>

<br>

## 📜 Содержание

<img align="right" width="60" src="./static/logos/React.png">

-   [🚀 Для запуска проекта выполни следующие шаги](#-Для-запуска-проекта-выполни-следующие-шаги)
-   [🤖 Краткий обзор команд для проекта](#-Краткий-обзор-команд-для-проекта)
-   [🤔 FAQ](#-faq)

<br>

### 🚀 Для запуска проекта выполни следующие шаги

1. [Скачай и установи](https://nodejs.org/en/) последнюю LTS-версию Node.js. Обновить уже установленную Node.js можно [обычным установщиком](https://nodejs.org/en/). Обновить уже установленный npm можно командой `npm install -g npm`;
2. Выполни в консоли `node -v` — убедись, что установлена последняя версия Node.js не ниже `v8.11.3`;
3. Введи в консоли `npm -v` — убедись, что установлена последняя версия npm не ниже `5.6.0`;
4. [Скачай и установи Git](https://git-scm.com/downloads), если его нет на компьютере;
5. Введи `git --version` — проверь версию установленного Git, должно быть не ниже `2.18.0`;
6. Склонируй и запусти этот проект: `git clone https://github.com/Lectrum/react-online-intensive.git`;
7. После клонирования выполни команду `cd react-online-intensive`;
8. Выполни команду `npm install`;
9. Самое время выполнить `npm start`;
10. Перейди в браузер и открой страничку [http://localhost:3000](http://localhost:3000/). Когда страничка загрузится, ты увидишь сообщение:

> «Привет! Начало здесь!».

11. Открой Chrome Dev Tools и перейди на вкладку console, там не должно быть каких-либо ошибок.

<br>
<br>

### 🤖 Краткий обзор команд для проекта

> Заметка: запускать через `yarn «имя команды»` или `npm run «имя команды»`.

| Команда           | Описание                                                          |
| ----------------- | ----------------------------------------------------------------- |
| `start`           | запустить проект для разработки                                   |
| `build:prod`      | сбилдить проект                                                   |
| `build:analyze`   | сбилдить проект и запустить режим детального анализа сборки       |
| `lint`            | провести анализ всего исходного кода на стилистически ошибки      |
| `lint:javascript` | провести анализ исходного JavaScript-кода на стилистически ошибки |
| `lint:css`        | провести анализ исходного CSS-кода на стилистически ошибки        |
| `test`            | запустить тесты                                                   |
| `test:watch`      | запустить тесты в watch-режиме                                    |
| `test:debug`      | запустить тесты в debug-режиме                                    |
| `soundcheck`      | запустить все линтеры и тесты                                     |
| `prettier`        | отформатировать исходный код с помощью prettier                   |
| `deploy`          | задеплоить приложение на свой github pages                        |

> Заметка: после деплоя на github pages приложение будет доступно по адресу:\
> https://`имя-твоего-пользователя-гитхаб`.github.io/`имя-твоего-репозитория-с-приложением`

<br>

### 🤔 FAQ

##### Вопрос: Почему весь мой код подсвечивает редактор? Что такое линтер?
###### Ответ: Линтер — это статический анализатор кода. Сообщает разработчику о стилистических, и функциональных ошибках в программном коде. Мы используем [ESLint](https://eslint.org/) для JavaScript, и [stylelint](https://stylelint.io/) для CSS. Детально о том, как работает линтер на примере ESLint можно узнать [здесь](https://www.youtube.com/watch?v=hppJw2REb8g).

##### Вопрос: Как остановить запущенный проект командой npm run start (или yarn start)?
###### Ответ: В терминале нажми сочетание клавиш CTRL+C.

<br>

<div align="center">
  <!-- Сделано с любовь -->
    <img src="https://img.shields.io/badge/%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE%20%D1%81-%F0%9F%96%A4-red.svg?longCache=true&style=for-the-badge&colorA=000&colorB=fedcba"
      alt="Сделано с любовь" />
</div>