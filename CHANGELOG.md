# Changelog

## Unreleased

- Syntax highlighting tracks the kaikai 0.171 surface syntax.
- `#[...]` attributes are highlighted as attributes, not comments. A
  `#[doc("""...""")]` used to leave the rest of the file coloured as a
  string.
- Function and type names in declarations are highlighted.
- New: `pub(pkg)`, `lazy`, the `??`, `|?` and `|!` operators, `~r/.../`
  regex literals, interpolation format specs (`#{n:05}`), `\x41`
  escapes, hex/binary/complex numbers, and the `kind` and `opaque`
  heads. Unknown escapes are marked invalid.
- Snippets follow `kai fmt` style; the lambda snippet is `(x) => ...`.

## 0.1.0 — 2026-05-20

- Initial release.
- LSP client wiring (hover, goto-definition, diagnostics, document symbols).
- Syntax highlighting via TextMate grammar.
- Snippets for common kaikai forms.
