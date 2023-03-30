# Empty portal Next.js

# Описание

Шаблон для создания нового проекта на Next.js

# Быстрое начало

## Запуск

```bash
npm install
npm run dev
# или
npm install
next dev
```

## Используемые технологии

- next.js 13.2.4
- react 18.2.0
- typescript 5.0.2
- sass 1.60.0
- redux 4.2.1
- react-redux 8.0.5
- axios 0.27.2
- bootstrap 5.1.3
- react-bootstrap 2.3.1

# Среды

## Local

1. npm install
2. Создать файл .env.local в корне проекта и добавить в него переменные окружения NEXT_HOSTNAME = localhost и
   NEXT_PUBLIC_URL
3. npm run
   dev (`Для того, чтобы запустить проект с необходимой средой, то используйте npm скрипт из package.json. Например, npm run start.`)
4. Перейдите по адресу `https://localhost:3000/`

## Next.config.js

Если используются сторонние домены для разработки (например ссылки на изображения), то необходимо добавить их в
next.config.js в массив images.domains

Например:

```js
module.exports = {
  images: {
    domains: ['localhost', 'example.images.com'],
  },
}
```

## Environment

### Конфигурации окружения

- `.env` общий файл с переменным:
    - `NEXT_PUBLIC_URL` общий урл API
- `.env.development` файл с переменными:
    - `NEXT_PUBLIC_URL` урл API для `development`
- `.env.test` файл с переменными:
    - `NEXT_PUBLIC_URL` урл API для `test`
- `.env.production` файл с переменными:
    - `NEXT_PUBLIC_URL` урл API для `production`

# Change Log

Смотрите файл [CHANGELOG.md](./CHANGELOG.md)

# Ссылки и ресурсы

* [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
* [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
