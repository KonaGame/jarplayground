# ☕ CheerpJ 4.x Modern JAR Executor

An IDE-inspired, web-based Java runtime playground built using **CheerpJ 4.x**, vanilla HTML5, CSS3, and JavaScript. This tool allows users to run desktop-grade compilation units (`.jar` files) straight inside their web browsers with zero native installations, powered entirely by WebAssembly threads.

## 🎨 Interface Features

- **Professional Dev-Theme:** Sleek, low-contrast dark mode palette using modern typography (`Inter` & `Fira Code`).
- **Drag-and-Drop Loader:** Drag any `.jar` straight into the sidebar drop zone or use the native file picker fallback.
- **Dynamic VM Contexts:** Supports switching underlying targets between Java 8 (LTS), Java 11 (LTS), and Java 17.
- **Virtual Display Integration:** Wraps graphical AWT/Swing runtime frames inside a polished, simulated window container.
- **Live Lifecycle Diagnostics:** Features a responsive system status monitor displaying the active state of the WASM compilation space.

## 📂 Project Tree

```text
├── index.html   # Semantic workspace layout & third-party loader integration
├── style.css    # Comprehensive dark theme layout, custom select modules, & transitions
└── script.js    # VM lifecycle logic, drag/drop hooks, and local file blob streaming
