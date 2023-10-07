import * as path from 'path'
import { mkdir } from 'fs'
import { window } from 'vscode'

export const createDirectory = (baseDirectory: string, targetDirectory: string) => {
  mkdir(
    path.join(baseDirectory, targetDirectory),
    { recursive: true },
    (err: NodeJS.ErrnoException | null, current?: string) => {
      if (err) {
        window.showErrorMessage(`Directory ${current} create failed: ${err.message}`)
        return
      } 
      console.log(`Create directory: ${current} success!`)
    },
  )
}
