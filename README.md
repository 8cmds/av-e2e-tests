# AV E2E Tests

Testy E2E dla aplikacji AV QA Recruitment napisane w Playwright + TypeScript + Cucumber (BDD).

## Wymagania

- Node.js v22.12.0
- npm v11.10.0

Sprawdź czy masz poprawne wersje:

```bash
node -v
npm -v
```

Jeśli masz nvm, możesz zainstalować wymaganą wersję Node:

```bash
nvm install 22.12.0
nvm use 22.12.0
npm install -g npm@11.10.0
```

## Instalacja

Sklonuj repozytorium i zainstaluj zależności:

```bash
git clone 
cd av-e2e-tests
npm install
npx playwright install chromium

```
## Uruchamianie testów

Wszystkie testy:

```bash
npm test
```

Raport HTML po testach:

```bash
npm run test:report
```

Lub ręcznie krok po kroku:

```bash
npx bddgen
npx playwright test
```