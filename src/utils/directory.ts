import { mkdirp } from 'mkdirp'
import * as path from 'path'

export const createDirectory = (baseDirectory: string, targetDirectory: string) => {
  mkdirp(path.join(baseDirectory, targetDirectory)).then(() =>
    console.log(`Create directory: ${targetDirectory}`),
  )
}
