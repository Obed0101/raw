# Vivero Dashboard
Minimal SvelteKit template with Melt UI and glassmorphism theme.

## ✨ Features
- 🌙 Dark theme with glassmorphism
- 📱 Responsive top navbar
- ⚙️ Simple .env configuration
- 🎨 Tailwind CSS + Melt UI
- 📝 Markdown content support

## 🚀 Quick Start
```bash
yarn install
yarn dev
```

## ⚙️ Configuration
Edit `.env` to customize:
```env
APP_NAME=Vivero     # App title
THEME=dark          # Theme mode
GLASS=true          # Enable glassmorphism
NAVBAR=true         # Show navbar
CONTENT=true        # Show content area
DEBUG=false         # Debug mode
```

## 📁 Structure
```
src/
├── lib/
│   ├── Nav.svelte     # Top navbar
│   └── config.ts      # App configuration
├── routes/
│   └── +layout.svelte # Main layout
└── app.css           # Global styles
```

## 🎯 Design Philosophy
- **Minimal**: Readable in 10 seconds
- **Configurable**: Change via .env only
- **Modern**: Glass UI + dark theme
- **Simple**: Short variable names, clean code
