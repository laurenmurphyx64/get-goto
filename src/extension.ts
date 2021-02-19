// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// TODO: Output diagnostic information (console.log) and errors (console.error) on installation

	let disposable = vscode.commands.registerCommand('get-goto.getGoto', () => {
		let line = vscode.window.activeTextEditor?.selection.active.line;
		let character = vscode.window.activeTextEditor?.selection.active.character;
		let relativeFilePath = vscode.window.activeTextEditor?.document.fileName;

		let goto = relativeFilePath + ":" + line + ":" + character;

		vscode.env.clipboard.writeText(goto);
	});

	context.subscriptions.push(disposable);
}

// TODO: Output message on uninstall
export function deactivate() {}
