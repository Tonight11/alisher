# 🤖 CLAUDE.md

## 📌 Project Context

Проект — одностраничный лендинг на Nuxt 4 + Vue 3 + TypeScript  
с мультиязычностью (EN / ZH) через JSON (locales/\*.json).

Основная задача:

- быстрый, чистый, SEO-оптимизированный landing
- без CMS
- весь контент через i18n

---

## 🧠 Active Skills

- Vue Pinia Best Practices
- Vue.js Best Practices
- Nuxt UI v4
- Nuxt SEO Suite
- Nuxt 4 Core
- TypeScript
- Vue.js Development Guides

---

## ⚙️ Core Rules

### 1. i18n (Critical)

- НЕ хардкодить текст
- Все строки → locales/en.json и locales/zh.json
- Структура ключей должна совпадать
- Пример:
  hero.title
  hero.subtitle
  features.items.0.title

---

### 2. Компоненты

- Каждая секция = отдельный компонент
- UI отдельно от логики
- shared/ui — переиспользуемое
- widgets — секции лендинга

---

### 3. Nuxt Best Practices

- useAsyncData / useFetch (если API)
- useHead для SEO
- SSR-friendly код
- избегать client-only без причины

---

### 4. TypeScript

- строгая типизация
- без any

---

### 5. UI (Nuxt UI)

- использовать Nuxt UI как основу
- соблюдать консистентность
- Tailwind только при необходимости

---

### 6. SEO

- title
- description
- Open Graph
- alt у изображений
- правильная структура заголовков

---

### 7. Performance

- lazy loading
- минимум JS

---

## 🚫 Anti-Patterns

- хардкод текста
- дублирование
- большие компоненты
- лишние зависимости

---

## 🎯 Goal

- чистый код
- читаемость
- быстрый dev flow
