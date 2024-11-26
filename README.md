# 🌟 interactive-cli-menu

**interactive-cli-menu** is a sleek, modern, and customizable NPM package for creating interactive CLI menus. It supports smooth arrow key navigation, actionable items, and beautiful terminal UI—all without external dependencies! Perfect for making your command-line tools pop! 🎉

---

## 🚀 Features

- 🔼 **Arrow Key Navigation**: Effortlessly navigate menus with the up/down arrows.
- 🎨 **Customizable Styling**: Choose colors, widths, borders, and more.
- ⚡ **Actionable Items**: Attach custom actions to menu selections.
- 🪶 **Lightweight**: No external dependencies—100% native Node.js.
- 🛑 **Graceful Exit**: Cleanly handles `Ctrl+C` to terminate.

---

## 📦 Installation

Install via NPM:

```bash
npm install interactive-cli-menu
```

---

## 🛠️ Usage

### ✨ Simple Example

```javascript
const { createMenu } = require('interactive-cli-menu');

const menu = createMenu({
  title: '🍔 Main Menu',
  width: 50,
  borderColor: 36, // Cyan
  highlightColor: 33, // Yellow
  textColor: 37, // White
  items: [
    { label: '🔍 Search', action: () => console.log('Searching... 🔎') },
    { label: '⚙️ Settings', action: () => console.log('Opening settings... 🛠️') },
    { label: '❌ Exit', action: () => console.log('Goodbye! 👋') }
  ]
});

menu.render();
```

### 🖥️ Output

```
──────────────────────────────────────────────────
                   🍔 Main Menu
──────────────────────────────────────────────────

  🔍 Search
> ⚙️ Settings
  ❌ Exit

──────────────────────────────────────────────────
```

### Interact:
- Use **⬆️ Up** and **⬇️ Down** to navigate.
- Press **⏎ Enter** to select.

---

## 🎨 API

### `createMenu(options)`

#### `options` (object)

| Option           | Type     | Default       | Description                                                                 |
|------------------|----------|---------------|-----------------------------------------------------------------------------|
| `title`          | `string` | `'Menu'`      | Title displayed at the top of the menu.                                    |
| `width`          | `number` | `60`          | Width of the menu in characters.                                           |
| `borderColor`    | `number` | `90` (Gray)   | ANSI color code for the border.                                            |
| `highlightColor` | `number` | `34` (Blue)   | ANSI color code for the selected menu item.                                |
| `textColor`      | `number` | `37` (White)  | ANSI color code for unselected menu items.                                 |
| `items`          | `array`  | `[]`          | Array of menu items (see below).                                           |

---

### Menu Items (`items`)

Each item is an object with the following properties:

| Property   | Type       | Description                                            |
|------------|------------|--------------------------------------------------------|
| `label`    | `string`   | The text displayed for the menu item (supports emojis).|
| `action`   | `function` | The function executed when the item is selected.       |

---

## 🌟 Advanced Example: Dynamic Menus with Emojis

```javascript
const { createMenu } = require('interactive-cli-menu');

let items = [
  { label: '📄 View Files', action: () => console.log('Listing files... 🗂️') },
  { label: '➕ Add Item', action: () => console.log('Adding item... ✅') },
  { label: '❌ Exit', action: () => console.log('Goodbye! 👋') }
];

const menu = createMenu({
  title: '🛠️ My CLI Tool',
  width: 60,
  borderColor: 35, // Magenta
  highlightColor: 32, // Green
  textColor: 37, // White
  items
});

menu.render();
```

---

## 🛣️ Roadmap

🔮 Future Enhancements:
- 📂 **Nested Menus**: Add support for multi-level menus.
- 🌈 **Extended Themes**: More built-in color schemes and styles.
- 🕵️ **Search**: Enable searchable menus for longer lists.
- ⌨️ **Custom Keybindings**: Allow custom navigation keys.

---

## 🙌 Contributing

We ❤️ contributions! If you find a bug or have an idea for improvement, feel free to [open an issue](https://github.com/ddosnotification/interactive-cli-menu/issues) or submit a pull request. 

---

## 📄 License

**interactive-cli-menu** is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). 

---

✨ **Make your CLI tools stylish and user-friendly with interactive-cli-menu!** 🌟