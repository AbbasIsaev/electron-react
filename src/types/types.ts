import {KEY_API} from '../entity/entity'

export interface IApiWindow {
    [KEY_API]: {
        runShutdown(time: string): Promise<string>
    }
}