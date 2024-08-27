import {test,expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('https://www.saucedemo.com/')
})

test('Test 1', async  ({page}) => {
    await page.getByRole('textbox', {name:"Username"}).fill('standard_user')
    await page.getByRole('textbox', {name:"Password"}).fill('secret_sauce')
    await page.getByRole('button', {name:'Login'}).click()
})

test('Test 2', async  ({page}) => {
    await page.getByRole('textbox', {name:"Username"}).fill('standard_user')
    await page.getByRole('textbox', {name:"Password"}).fill('secret_sauce')
    await page.getByRole('button', {name:'Login'}).click()
})



 