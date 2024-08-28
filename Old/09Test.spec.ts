import {test,expect} from '@playwright/test'
import { FormPage } from '../Old/page-objects/FormPage'

test.beforeEach(async({page}) => {
    await page.goto('https://practice-automation.com/form-fields/')
    
})

test('Navigate input', async  ({page}) => {
    const inputValue = new FormPage(page)
    await inputValue.inputFields() 
})
 
test('Navigate CheckboxesPage', async  ({page}) => {
    const checkValue = new FormPage(page)
    await checkValue.Checkboxes()
})

