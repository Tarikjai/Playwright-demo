import {test,expect} from '@playwright/test'
import { NavigationPage } from '../page-objects/navigationPage'

test.beforeEach(async({page}) => {
    await page.goto('https://the-internet.herokuapp.com/')
    
})

test('Navigate authPage', async  ({page}) => {
    const formPage = new NavigationPage(page)
    await formPage.authPage()
})
 
test('Navigate CheckboxesPage', async  ({page}) => {
    const formPage = new NavigationPage(page)
    await formPage.CheckboxesPage()

})
 