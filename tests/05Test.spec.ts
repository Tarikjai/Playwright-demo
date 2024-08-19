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

    test('radio buttons', async({page})=> {
        await page.getByRole('radio', {name:'Red'}).check()
        const  radioButtonStatus = await page.getByRole('radio', {name:'Red'}).isChecked()
        expect(radioButtonStatus).toBeTruthy()
        await expect(page.getByRole('radio', {name:'Red'})).toBeChecked()

        await page.getByRole('radio', {name:'Blue'}).check()
        expect(await page.getByRole('radio', {name:'Red'}).isChecked()).toBeFalsy()
        expect(await page.getByRole('radio', {name:'Blue'}).isChecked()).toBeTruthy()
     
    })
    test('CheckBox', async({page})=> {
       await page.getByRole('checkbox', {name:'Water'}).click()
       await page.getByRole('checkbox', {name:'Wine'}).check()

        const allBoxes = page.getByRole('checkbox')
        for(const box of await allBoxes.all()){
            await box.check()
            expect(await box.isChecked()).toBeTruthy()
        }
    
    })
})