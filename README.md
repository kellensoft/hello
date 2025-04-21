# Hello

**Hello** is a modular, chainable message-building microservice written in Node.js. It processes a simple string input and responds with a templated message, optionally forwarding the result to another instance to build dynamic multi-stage responses.

---

## 🔧 Features

- 🧠 Uses a single anonymous input (query or body)
- 🧩 Supports message templating with `{{input}}`
- 🔗 Optionally chains to another API via `CALL_TARGET_URL`
- 🛑 Provides fallback behavior with `FAILURE_MESSAGE`
- 🛠 Configurable entirely through environment variables

---

## 🚀 Quick Start

### 1. Install dependencies (if any):
```bash
npm install
