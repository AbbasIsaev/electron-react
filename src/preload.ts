// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import {contextBridge, ipcRenderer} from 'electron'

import {CHANNEL_SHUTDOWN, KEY_API} from './entity/entity'
import {IApiWindow} from './types/types'

const api: IApiWindow[typeof KEY_API] = {
    runShutdown: (time: string): Promise<string> => ipcRenderer.invoke(CHANNEL_SHUTDOWN, time)
}

// Добавляет к объекту window.api.onShutdown = onShutdown(...)
contextBridge.exposeInMainWorld(KEY_API, api)