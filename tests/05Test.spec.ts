
import {expect, test} from '@playwright/test'


test.beforeEach(async ({page})=> {
    await page.goto('https://practice-automation.com/')
    
})


test.describe('Input Fields', () => {
    test.beforeEach(async ({page})=> {
         
        await page.getByText('Form Fields').click()
         
    })

    test('Input Field', async({page})=>{
       const usingTheGridEmailInput =  page.getByRole('textbox', {name:"Name"})

       await usingTheGridEmailInput.fill("test@test.com")
       await usingTheGridEmailInput.clear()
       await usingTheGridEmailInput.pressSequentially("test@test.com", {delay:500})

       //generic assertion
       const inputValue  = await usingTheGridEmailInput.inputValue()
       expect(inputValue).toEqual("test@test.com")

       //Locator assertion

       await expect(usingTheGridEmailInput).toHaveValue('test@test.com')
    })

})