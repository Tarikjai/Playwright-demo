import {test as base} from '@playwright/test'

export type TesOptions  = {
    herokuappURL : string
}



export const test = base.extend<TesOptions>({
    herokuappURL: ['', {option: true}] 
})