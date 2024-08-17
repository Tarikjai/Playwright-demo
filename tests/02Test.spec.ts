import {test,expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/')
    
})


test('User-Facing Locators', async  ({page}) => {
    const inputUsername = page.getByRole('textbox', {name:"Username"})
    const inputPassword = page.getByPlaceholder('Password')

    await inputUsername.fill('standard_user')
    await inputPassword.fill('secret_sauce')

    expect(inputUsername).toHaveValue('standard_user')

    await page.getByRole('button', {name:'Login'}).click()
    await page.getByText('Swag Labs').click()
})


test('Extraire valeur', async({page}) => {
    //Single test value
    const pageLogo = page.locator('.login_logo')
    const logoText = await pageLogo.textContent()
    expect(logoText).toEqual('Swag Lab3s')

})

 