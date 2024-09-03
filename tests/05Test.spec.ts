import {test,expect} from '@playwright/test'

test.beforeEach(async ({page})=>{
    await page.goto('/')

})


test.describe('Form',() =>{
    //test.describe.configure({retries: 3})
    
    test.beforeEach(async ({page})=>{
        await page.getByText('Form Fields').click()
    } )
    test('input field',async({page})=>{
        const usingNameInput = page.getByRole('textbox', {name:"Name"})
        await usingNameInput.fill('Tarik')
        await usingNameInput.clear()
        await usingNameInput.pressSequentially('Tarik', {delay:400})
        await page.getByRole('textbox', {name:"Password"}).fill('123456')
        
        await page.screenshot({path: 'screenshots/textBox.png'})
        await page.getByRole('textbox', {name:"Name"}).screenshot({path:'screenshots/nameField.png'})
        
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
    test('Static dropDown', async({page})=> {
        const dropDownMenu = page.locator('select')
        await dropDownMenu.click()

        // page.getByRole('list') // Quand on a une list qui a un tag  UL
        // page.getByRole('listitem') // Quand on a une liste qui a un tag LI

        await dropDownMenu.selectOption('Undecided')
        
        //assertion

        const selectedoption = await dropDownMenu.inputValue()
        expect(selectedoption).toBe('undecided')

     })
      
})