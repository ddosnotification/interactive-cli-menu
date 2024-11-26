const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper functions for styling
const colorText = (text, colorCode) => `\x1b[${colorCode}m${text}\x1b[0m`;
const bold = (text) => `\x1b[1m${text}\x1b[0m`;

function createMenu(options) {
  let selectedIndex = 0;

  const { title = 'Menu', width = 60, borderColor = 90, highlightColor = 34, textColor = 37 } = options;

  const renderMenu = () => {
    console.clear();

    const border = colorText('─'.repeat(width), borderColor);
    const highlight = (text) => colorText(text, highlightColor);
    const text = (content) => colorText(content, textColor);

    console.log(border);
    console.log(text(title.padStart(Math.floor(width / 2) + title.length / 2)));
    console.log(border);
    console.log();

    options.items.forEach((item, index) => {
      const prefix = index === selectedIndex ? `${highlight('> ')}` : '  ';
      console.log(`${prefix}${index === selectedIndex ? bold(text(item.label)) : text(item.label)}`);
    });

    console.log();
    console.log(border);
  };

  const handleKeypress = (chunk, key) => {
    if (key.name === 'up') {
      selectedIndex = (selectedIndex - 1 + options.items.length) % options.items.length;
      renderMenu();
    } else if (key.name === 'down') {
      selectedIndex = (selectedIndex + 1) % options.items.length;
      renderMenu();
    } else if (key.name === 'return') {
      console.clear();
      options.items[selectedIndex].action();
      rl.close();
      process.stdin.setRawMode(false);
      process.stdin.pause();
    } else if (key.ctrl && key.name === 'c') {
      // Graceful exit on Ctrl+C
      rl.close();
      process.stdin.setRawMode(false);
      process.stdin.pause();
      console.clear();
      console.log('Exited menu.');
    }
  };

  const enableRawMode = () => {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
      const key = {
        name: chunk === '\r' ? 'return' : chunk === '\x1b[A' ? 'up' : chunk === '\x1b[B' ? 'down' : null,
        ctrl: chunk === '\x03'
      };
      if (key.name) handleKeypress(chunk, key);
    });
  };

  return {
    render: () => {
      renderMenu();
      enableRawMode();
    }
  };
}

module.exports = { createMenu };
