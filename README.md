# ovid

> _Ovid was a raunchy Roman poet_ 💌

## [Try the browser demo here](https://ovid-editor.web.app/)

Expressionist and VSCode inspired scripting panel with multi-tabs, persistent storage, typescript support, application DOM autocomplete, custom console, basic I/O features and more for Illustrator, Photoshop, After Effects, Premiere Pro, Indesign, and Audition.

The goal of this panel is to lessen the burden to entry for any one curious about scripting while also providing a sophisticated environment for any one experienced to sandbox snippets within, all with absolutely no setup required.

## Full typescript support for any valid host app:

![](https://thumbs.gfycat.com/PrestigiousShinyDouglasfirbarkbeetle-size_restricted.gif)

## ECMA2018 support for scripting:

![](https://thumbs.gfycat.com/FlippantFirsthandGangesdolphin-size_restricted.gif)

Ovid will compile down any unsupported ECMA methods to allow you to script completely modern Javascript -- whenever you save a file with ECMA2018 or unsupported syntax, Ovid will save a compiled version (`"[name]-compiled.jsx"`) alongside it for you to use outside this panel.

## Full I/O features with internal commands and hotkeys:

![](https://thumbs.gfycat.com/SelfishAffectionateFerret-size_restricted.gif)

All commands are accessible in the context menu on right click, or via searching the `Command Palette` (`F1`):

- `control/cmd + Enter` - Run the current script
- `alt + Enter` (when text is selected) - Run the current selected text only
- `control/cmd + N` - Open a new file
- `control/cmd + O` - Open a file
- `control/cmd + S` - Save file
- `control/cmd + shift + S` - Save As...
- `Escape` - Close tab
- `alt + RightArrow` - Next tab
- `alt + LeftArrow` - Previous tab
- `control/cmd + shift + I` - Inspect Panel (open Chrome DevTools)
- `control/cmd + R` - Reload extension

## Todo

- Tokenization and syntax highlighting
- Finish UI Spy to handle theme
- Add CSS editor in modal dialog to allow easy user-generated syntax highlighting customization
- Revert tabs back to custom HTML to support horizontal scrolling
- Fix UI glitch where resizing the panel causes the split pane and console to go out of sync
- Fix bug where closing currently active Tab sometimes results in the editor's text content not redrawing
- Fix `console.error` statements, wrap all editor contents in `try` blocks to catch any scripting errors (currently fails silently)
- Finish side drawer (file tree menu?)
