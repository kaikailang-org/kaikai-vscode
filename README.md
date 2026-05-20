# kaikai for Visual Studio Code

Language support for [kaikai](https://github.com/lnds/kaikai) — a
functional, statically-typed language with algebraic effects,
compiled to native code via LLVM.

## Features

| Feature              | Source                                                |
| -------------------- | ----------------------------------------------------- |
| Syntax highlighting  | TextMate grammar (`syntaxes/kaikai.tmLanguage.json`)  |
| Hover                | `kai lsp`                                             |
| Go to definition     | `kai lsp`                                             |
| Diagnostics          | `kai lsp` (`textDocument/publishDiagnostics`)         |
| Document symbols     | `kai lsp`                                             |
| Snippets             | `snippets/kaikai.json` (`fn`, `match`, `effect`, ...) |

Capabilities are negotiated through LSP `initialize`. As the
language server grows, this extension picks up new features
without changes.

## Requirements

You need the `kai` CLI on your `PATH`. Recommended install:

```bash
brew install kaikailang-org/kaikai/kaikai
```

Override the binary location through `kaikai.lspPath` if needed.

## Install (manual)

The extension is not yet published to the Marketplace or Open VSX.
Package it locally and install the resulting `.vsix`:

```bash
npm install
npx vsce package                       # produces kaikai-0.1.0.vsix
code --install-extension kaikai-0.1.0.vsix
```

## Settings

| Setting               | Default   | Description                                     |
| --------------------- | --------- | ----------------------------------------------- |
| `kaikai.lspPath`      | `kai`     | Path to the `kai` binary.                       |
| `kaikai.lspArgs`      | `["lsp"]` | Arguments passed to the binary.                 |
| `kaikai.trace.server` | `off`     | LSP trace verbosity: `off`, `messages`, `verbose`. |

## Resources

- Language docs: <https://github.com/lnds/kaikai>
- LSP server: see `docs/lsp.md` in the kaikai repository.
- Issues for this extension:
  <https://github.com/kaikailang-org/kaikai-vscode/issues>

## License

MIT — see [LICENSE](./LICENSE).
