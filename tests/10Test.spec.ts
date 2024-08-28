import {test,expect} from '@playwright/test'
import { FormPage } from '../page-object/FormPage'


test.beforeEach(async({page}) => {
    await page.goto('https://practice-automation.com/form-fields/')
    
})

test('Value ', async ({page})=> {
    const input = new FormPage(page)
    await input.inputValue("test", "123456")
    await input.checkboxes(true)
})