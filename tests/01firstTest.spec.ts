import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')
    await page.getByText('Form Authentication').click()
})
 
test("Locator syntax rules", async ({page}) =>{

     // Tag name
     await page.locator('input').first().click()

     // ID
     await page.locator('#username').click()
 
     // Class value
     await page.locator('.subheader').click()
 
     // Attribute
     await page.locator('[type="text"]').click()
 
     // Class value (full)
     await page.locator('[class="large-6 small-12 columns"]').last().click()
     
 
     // Combiner different selectors
     await page.locator('input[type="text"][name="username"]').click()
 
     // Matcher le texte partiellement
     
     await page.locator(':text("Pag")').click()
 
     // Matcher le text exact 
     await page.locator(':text-is("Login Page")').click()
 })


test.describe.only('Suite 1', () => {
    test('visiter la page de connexion', async  ({page}) => {
        await page.getByRole('textbox', {name:"username"}).first().click()
        await page.getByRole('button', {name:"Login"}).first().click()
        await page.getByLabel('Email').first().click()
        await page.getByPlaceholder('Jane Doe').click()
        await page.getByTitle('Iot Dashboard').click()
    })

    
})
 