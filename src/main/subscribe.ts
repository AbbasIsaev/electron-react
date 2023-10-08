import {ipcMain} from 'electron'
import path from 'path'
import child_process from 'child_process'

import {CHANNEL_SHUTDOWN} from '../entity/entity'

export function Subscribe() {
    ipcMain.handle(CHANNEL_SHUTDOWN, (_, time: string) => {
        // Путь к скриптам __dirname = .webpack\main
        const scriptPath = path.join(__dirname, '..', 'renderer', 'src', 'shellScripts', 'ShutDown.bat')
        const childProcess = child_process.execSync(`call ${scriptPath} ${time}`)
        return childProcess.toString()
    })
}