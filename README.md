![# hello](https://github.com/user-attachments/assets/eb48c76a-8529-411b-b229-51d727493118)
<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License"></a>
  <img src="https://img.shields.io/badge/languages-312%2B-blue.svg" alt="Supported Languages">
  <img src="https://img.shields.io/badge/made%20with-C-lightgrey.svg" alt="C Language">
</p>

A simple C program that utilizes internationalization (i18n) using GNU gettext, supporting over 300 languages and locales.

## Purpose

This project showcases:
- Basic C programming with internationalization support
- GNU gettext integration for multi-language support
- Automated translation file generation for numerous locales
- Build system using Makefiles

## ✨ Features

- 🌐 312+ language locales supported out-of-the-box
- 🖥️ System locale detection (automatic)
- 👤 Custom names via command line arguments
- ⚡ Lightweight build using make
- 📂 Portable: works on any POSIX-compatible system

## 🚀 Getting Started

### Prerequisites
- GCC (or any C compiler)
- GNU gettext (`xgettext`, `msgfmt`, etc.)
- `make`


```bash
git clone https://github.com/yourusername/hello.git
cd hello
make
```

This will:
- Compile the C source code
- Generate compiled translation files (`.mo`)
- Create the executable in `bin/hello`

## 💻 Usage


### Use system locale
```bash
./bin/hello
```

### Specify a name
```bash
./bin/hello "Your Name"
```

### Test with specific locale
```bash
LANG=fr_FR ./bin/hello "Claude"
LANG=es_ES ./bin/hello "Mundo"
LANG=zh_CN ./bin/hello "世界"
```

## 🌎 Supported Languages

The project includes translations for major languages including:
- European: French, Spanish, German, Italian, Portuguese, etc.
- Asian: Chinese, Japanese, Korean, Thai, Hindi, etc.
- Middle Eastern: Arabic, Hebrew, Persian, etc.
- Cyrillic: Russian, Ukrainian, Bulgarian, etc.
- And many more regional variants

## 🗂️ Project Structure

```
├── src/
│   ├── hello.c          # Main source code
│   └── locales/         # Translation files (.po)
├── bin/                 # Build output (generated)
├── Makefile             # Build configuration
└── README.md            # This file
```

## 🔧 Development

To add new translatable strings:
1. Mark strings with `_()` in source code:
```c
printf(_("Hello World!\n"));
```
2. Extract messages:
```bash
xgettext --keyword=_ -o messages.pot src/hello.c
```
3. Update `.po` files in `src/locales/`
4. Rebuild:
```bash
make
```

## 🧹 Clean Up

Remove all build artifacts:

```bash
make clean
```
## 🤝 Contributing
Okay to PR, but you should feel bad doing it.

## 📜 License

MIT License © 2025
