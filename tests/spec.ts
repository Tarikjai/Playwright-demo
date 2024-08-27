import {test,expect} from '@playwright/test'


async submitLogin() {
    await page.getByRole('textbox', {name:"Username"}).fill('standard_user')
    await page.getByRole('textbox', {name:"Password"}).fill('secret_sauce')
    await page.getByRole('button', {name:'Login'}).click()
})



test('Test 2', async  ({page}) => {
    const loginPage = new LoginePage(page)
    await loginPage.submitLogin()
})