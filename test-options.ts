import {test as base} from '@playwright/test'

export type TesOptions  = {
    herokuappURL : string
    FormFieldsPage : string

}



export const test = base.extend<TesOptions>({
    herokuappURL: ['', {option: true}] ,

    FormFieldsPage: async({page} ,use) =>{
        await page.goto('/')
        await page.getByText('Form Fields').click()
        await use('')
    }
})