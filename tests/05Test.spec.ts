import {test,expect} from '@playwright/test'

test.beforeEach(async ({page})=>{
    await page.goto('https://practice-automation.com/')

})


test.describe('Form',() =>{
    test.beforeEach(async ({page})=>{
        await page.getByText('Form Fields').click()
    } )

    test('input field',async({page})=>{
        const usingNameInput = page.getByRole('textbox', {name:"Name"})

        await usingNameInput.fill('Tarik')
        await usingNameInput.clear()
        await usingNameInput.pressSequentially('Tarik', {delay:400})

        // Generic Assertion
        const inputValue = await usingNameInput.inputValue()
        expect(inputValue).toEqual('Tarik')

        //Locator assertion
        await expect(usingNameInput).toHaveValue('Tarik')


    })



})