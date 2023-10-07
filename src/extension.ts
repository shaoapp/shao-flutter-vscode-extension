import { ExtensionContext, commands } from 'vscode'
import { newModule } from './commands'

export function activate (context: ExtensionContext) {
  context.subscriptions.push(
    commands.registerCommand('extension.new-module', newModule),		
  )
}
