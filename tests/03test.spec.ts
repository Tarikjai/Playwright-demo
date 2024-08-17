import {expect, test} from '@playwright/test'

test.beforeEach(async ({page})=>{
    await page.goto('https://practice-automation.com/form-fields/')
})
 
test('Extraire des valeurs', async({page}) => {
    //input value
    const inputField = page.getByRole('textbox', {name:'Name'})
    await inputField.fill('Tarik')
    const NameValue = await inputField.inputValue()
    expect(NameValue).toEqual('Tarik')
    //Single text value
    const button = page.locator('.custom_btn')
    const buttonText = await button.textContent()
    expect(buttonText).toEqual('Submit')
    //All text value
    const automationTools  = await page.locator('li').allTextContents()
    expect(automationTools).toContain('Playwright')  
})

