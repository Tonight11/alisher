---
name: vue-development-guides
description: Vue 3 and Nuxt 3 development best-practices for building, refactoring, and reviewing applications with Composition API, Vue SFC patterns, reactivity, and component data flow. Use when working on Vue/Nuxt codebases and you need consistent architecture, state handling, and maintainable component structure.
---

# Vue Development Guides

Follow this workflow when implementing or reviewing Vue/Nuxt code.

## Defaults

- Prefer Composition API.
- Prefer Vue SFC with `<script setup lang="ts">`.
- Keep SFC section order: `<script>` then `<template>` then `<style>`.

## Workflow

1. Apply reactivity rules from [references/reactivity-guide.md](references/reactivity-guide.md) before introducing or changing state.
2. Apply SFC conventions from [references/sfc-guide.md](references/sfc-guide.md) when creating or editing components.
3. Apply parent/child communication rules from [references/data-flow-guide.md](references/data-flow-guide.md) for props, emits, `v-model`, and provide/inject.
4. Apply shared-state recommendations from [references/state-management-guide.md](references/state-management-guide.md) when state must be reused across features.

## Component Scope

- Keep each component focused on one responsibility.
- Split large components into child components for independent UI sections.
- Move reusable stateful logic and side effects into composables (`useXxx`).
- Keep data flow explicit: props down, events up unless a stronger pattern is required.

## Review Checklist

- Confirm predictable state with a clear source of truth.
- Confirm derived values use computed logic instead of duplicated state.
- Confirm watchers are necessary and scoped.
- Confirm component boundaries are clear and testable.
- Confirm communication patterns are consistent with the reference guides.
