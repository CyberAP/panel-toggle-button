import * as vscode from "vscode";

let terminalToggleButton: vscode.StatusBarItem;

export function activate({ subscriptions }: vscode.ExtensionContext) {
  terminalToggleButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Left,
    20000
  );
  terminalToggleButton.text = "$(terminal)";
  terminalToggleButton.tooltip = "Toggle Panel";
  terminalToggleButton.command = "workbench.action.togglePanel";
  terminalToggleButton.show();
}
