# Angular RxJS Quick Guide

This project demonstrates key RxJS operators used in Angular for handling async data streams with real API examples.

## 🔑 RxJS Operators Overview

### 🔁 switchMap
- Cancels previous observable and switches to a new one.
- **Use**: Search-as-you-type.

### 🔄 mergeMap
- Runs all inner observables in parallel.
- **Use**: Multiple API calls simultaneously.

### 🧭 concatMap
- Executes observables one after another, in order.
- **Use**: Step-by-step form/process.

### 🚫 exhaustMap
- Ignores new emissions while a request is active.
- **Use**: Prevent double clicks (e.g. login).

### ⛔ takeUntil
- Unsubscribes when a notifier emits (like `ngOnDestroy`).
- **Use**: Auto-cleanup of subscriptions.

---

## 🌐 API Used

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) (for user & post data)

---

## 🔧 Run Locally

```bash
git clone <repo>
cd <project>
checkout `development` branch
npm install
ng serve
