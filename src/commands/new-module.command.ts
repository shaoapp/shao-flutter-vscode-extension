import * as path from 'path'
import { InputBoxOptions, Uri, window, workspace } from 'vscode'
import { createDirectory } from '../utils'
import { existsSync } from 'fs'

async function _promptForModuleName (): Promise<Thenable<string>> {
  const opts: InputBoxOptions = {
    prompt: 'Module Name',
    placeHolder: 'home',
  }
  return await window.showInputBox(opts) || ''
}

export const newModule = async (uri: Uri) => {
  const settingKeyDirectories = 'shaoFlutter.directories'
  const moduleName = await _promptForModuleName()
  if (moduleName.length === 0) {
    window.showErrorMessage('The module name must not be empty')
    return
  }
  
  const targetDirectory = path.join(uri.fsPath, moduleName)
  if (existsSync(targetDirectory)) {
    window.showErrorMessage('The module directory exists')
    return
  }
  
  // Directories refers:
  // https://github.com/Flutterando/Clean-Dart/blob/master/README_en.md
  // https://felipeemidio.medium.com/folder-structure-for-flutter-with-clean-architecture-how-i-do-bbe29225774f
  // https://github.com/aquilarafa/clean_dart_flutter_command
  // https://github.com/jacobaraujo7/login-firebase-clean-dart
  // https://www.youtube.com/watch?v=7V_P6dovixg
  const items = workspace.getConfiguration().get<string[]>(settingKeyDirectories)

  items?.forEach(item => {
    createDirectory(targetDirectory, item)
  })
}
