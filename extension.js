const { workspace, window } = require("vscode");
const { LanguageClient, TransportKind } = require("vscode-languageclient/node");

let client;

function activate(_context) {
  const config = workspace.getConfiguration("kaikai");
  const command = config.get("lspPath") || "kai";
  const args = config.get("lspArgs") || ["lsp"];

  const serverOptions = {
    run:   { command, args, transport: TransportKind.stdio },
    debug: { command, args, transport: TransportKind.stdio },
  };

  const clientOptions = {
    documentSelector: [{ scheme: "file", language: "kaikai" }],
    outputChannel: window.createOutputChannel("kaikai"),
  };

  client = new LanguageClient("kaikai", "kaikai", serverOptions, clientOptions);
  client.start();
}

function deactivate() {
  if (client) return client.stop();
}

module.exports = { activate, deactivate };
