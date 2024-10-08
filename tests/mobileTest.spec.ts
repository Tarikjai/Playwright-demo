import {test, expect} from '@playwright/test'


test('User-Facing Locators', async  ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    const inputUsername = page.getByRole('textbox', {name:"Username"})
    const inputPassword = page.getByPlaceholder('Password')

    await inputUsername.fill('standard_user')
    await inputPassword.fill('secret_sauce')
    
    expect(inputUsername).toHaveValue('standard_user')
    await page.waitForTimeout(1000)

    await page.getByRole('button', {name:'Login'}).click()
    await page.getByText('Swag Labs').click()
})